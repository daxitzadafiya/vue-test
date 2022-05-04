<template>
  <b-row>
    <h3><strong>Create new user</strong></h3>
    <b-col></b-col>
    <b-col
      ><div class="container">
        <form @submit.prevent="onSubmit">
          <div role="group">
            <b-form-input
              class="mb-2"
              id="input-name"
              v-model="formData.name"
              :state="nameState"
              aria-describedby="input-live-name"
              placeholder="Enter your name"
              trim
            ></b-form-input>

            <b-form-input
              class="mb-2"
              id="input-mobile"
              type="number"
              v-model="formData.mobileNo"
              :state="mobileNoState"
              aria-describedby="input-live-mobile-no"
              placeholder="Enter your mobile no"
              trim
            ></b-form-input>

            <b-form-input
              class="mb-2"
              type="email"
              id="input-email"
              v-model="formData.email"
              :state="emailState"
              aria-describedby="input-live-email"
              placeholder="Enter your email"
              trim
            ></b-form-input>

            <b-form-input
              class="mb-2"
              id="input-address"
              v-model="formData.address"
              :state="addressState"
              aria-describedby="input-live-address"
              placeholder="Enter your address"
              trim
            ></b-form-input>

            <b-form-input
              class="mb-2"
              id="input-latitude"
              v-model="formData.latitude"
              :state="latitudeState"
              aria-describedby="input-live-latitude"
              placeholder="Enter latitude"
              trim
            ></b-form-input>

            <b-form-input
              class="mb-2"
              id="input-longitude"
              v-model="formData.longitude"
              :state="longitudeState"
              aria-describedby="input-live-longitude"
              placeholder="Enter longitude"
              trim
            ></b-form-input>

            <b-button type="submit" variant="primary" class="align-right mt-3">
              SAVE
            </b-button>
          </div>
        </form>
      </div>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>
<script>
import Repository from "../../repositories/RepositoryFactory";
const registrationRepository = Repository.get("registration");
export default {
  name: "create-user",
  computed: {
    nameState() {
      return this.formData.name != "" ? true : false;
    },
    mobileNoState() {
      return this.formData.mobileNo != "" ? true : false;
    },
    emailState() {
      return this.formData.email != "" ? true : false;
    },
    addressState() {
      return this.formData.address != "" ? true : false;
    },
    latitudeState() {
      return this.formData.latitude != "" ? true : false;
    },
    longitudeState() {
      return this.formData.longitude != "" ? true : false;
    },
  },
  data() {
    return {
      formData: {
        name: "",
        mobileNo: "",
        email: "",
        address: "",
        latitude: "",
        longitude: "",
        image: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      if (
        this.nameState &
        this.mobileNoState &
        this.emailState &
        this.addressState &
        this.latitudeState &
        this.longitudeState
      ) {
        try {
          await registrationRepository.create(this.formData);
          this.$swal("New record added successfully");
          this.$router.push("/");
        } catch (error) {
          console.log(error);
          this.$swal("somethind went wrong for more info please check console");
        }
      }
    },
  },
};
</script>