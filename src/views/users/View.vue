<template>
  <div class="home" v-if="user">
    <OpenStreetMap :markers="markers" :options="options" :userDetails="user" />
  </div>
</template>

<script>
import OpenStreetMap from "@/components/OpenStreetMap";
import Repository from "@/repositories/RepositoryFactory";
const registrationRepository = Repository.get("registration");
export default {
  name: "Home",
  data() {
    return {
      user: "",
      markers: [
        {
          position: {
            lat: "",
            lng: "",
          },
          popup: {
            content: "blou", // an open popup that have with the 'blou' text
            show: false,
          },
        },
      ],
      options: {
        view: {
          lat: 23.033863,
          lng: 72.585022,
          zoom: 3,
        },
      },
    };
  },
  components: {
    OpenStreetMap,
  },

  async created() {
    const reponse = await registrationRepository.getUser(this.$route.params.id);
    const data = reponse.data;
    this.user = reponse.data;
    this.markers[0].position.lat = +data.latitude;
    this.markers[0].position.lng = +data.longitude;
    this.markers[0].popup.content = `user details : user name is ${data.name} and city name is  ${data.address}`;
    this.options.view.lat = +data.latitude;
    this.options.view.lng = +data.longitude;
    this.markers.popup.show = true;
  },
};
</script>
