<template>
  <center class="m-auto">
    <div class="w-2">
      <b-alert class="mx-5" show>
        <strong>User details with latitude and longitude</strong>
      </b-alert>
    </div>

    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem"
      class="mb-2"
    >
      <b-card-text>
        <leaflet :options="options" :markers="markers" />
      </b-card-text>

      <b-card-text class="text-start">
        <p>
          <strong> Name :</strong> {{ userDetails.name }} <br />
          <strong>Mobile No </strong>:{{ userDetails.mobileNo }} <br />
          <strong>Address </strong>:{{ userDetails.address }} <br />
          <strong>Email </strong>: {{ userDetails.email }} <br />
          <strong>latitude </strong>:{{ userDetails.latitude }} <br />
          <strong>longitude </strong>:{{ userDetails.longitude }} <br />
        </p>
      </b-card-text>
    </b-card>
  </center>
</template>

<script>
import Leaflet from "easy-vue-leaflet";

export default {
  props: {
    options: {
      type: [Array, Object],
      required: true,
    },
    markers: {
      type: [Array, Object],
      required: true,
    },
    userDetails: {
      type: [Array, Object],
      required: true,
    },
  },
  name: "OpenStreetMap",
  components: {
    Leaflet,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://unpkg.com/leaflet@1.6.0/dist/leaflet.css");
#leaflet {
  height: 17rem !important;
}
</style>