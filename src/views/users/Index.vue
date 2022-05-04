<template>
  <div>
    <div class="m-0 d-flex justify-content-around align-items-center">
      <h3><strong>Users Details</strong></h3>

      <b-button size="sm" class="mb-2" variant="primary" @click="createNewUser">
        <b-icon icon="plus-lg" aria-hidden="true"></b-icon> Create New
      </b-button>
    </div>
    <div class="container" v-if="items.length <= 0">
      <b-alert show>You do not have any records please create new one</b-alert>
    </div>
    <div class="container" v-else>
      <b-table
        :items="items"
        :fields="fields"
        :busy="isBusy"
        class="mt-3"
        outlined
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template #cell(action)="data">
          <p class="h5 mb-2">
            <b-button-group class="mr-1">
              <b-button title="Save file" @click="destroyUser(data.item.id)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>

              <b-button title="Load file" @click="editUser(data.item.id)">
                <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              </b-button>

              <b-button title="New document" @click="viewUser(data.item.id)">
                <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
              </b-button>
            </b-button-group>
          </p>
        </template>
      </b-table>
    </div>
  </div>
</template>
``
<script>
import Repository from "../../repositories/RepositoryFactory";
const registrationRepository = Repository.get("registration");
export default {
  name: "Home",
  data() {
    return {
      isBusy: false,
      fields: [
        "id",
        "name",
        "mobileNo",
        "email",
        "address",
        "latitude",
        "longitude",
        { key: "action", label: "action" },
      ],
      items: [],
    };
  },
  async created() {
    this.isBusy = true;
    await this.getUser();
    this.isBusy = false;
  },
  methods: {
    createNewUser() {
      this.$router.push({ name: "user-create" });
    },
    viewUser(id) {
      this.$router.push({ name: "view-user", params: { id: id } });
    },
    editUser(id) {
      this.$router.push({ name: "user-update", params: { id: id } });
    },
    async getUser() {
      const { data } = await registrationRepository.get();
      this.items = data;
    },

    async destroyUser(id) {
      try {
        await registrationRepository.delete(id);
        this.$swal("Record has been deleted");
        await this.getUser();
      } catch (error) {
        console.log(error);
        this.$swal("somethind went wrong for more info please check console");
      }
    },
  },
};
</script>
