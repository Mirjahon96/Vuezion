<template>
  <div class="map">
    <div class="card">
      <div class="card">
        <div class="card-content">
          <div class="card-body">
            <h2 class="heading-2">Our Location</h2>
            <label>
              <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
              <button class="btn btn-blue" @click="addMarker">Add</button>
            </label>

            <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 40.2222286, lng: 69.270886 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  .card {
    border-radius: 6px;
    box-shadow: 0 2px 2px hsla(38, 16%, 76%, 0.5);
    background-color: #fff;
    color: #252422;
    position: relative;
    z-index: 1;
    border: none;
    margin: 1rem 1rem;

    &-content {
      padding: 10px 20px 10px;

      .heading-2 {
        margin: 1rem 0;
      }

      .card-body {
        padding: 10px 0;

        label {
          font-size: 15px;
          color: $grey-font-color;
          display: inline-block;
          margin: 1rem 0;
        }
        input {
          padding: 12px 16px;
          border: 1px solid #e9e9e9;
          outline: none;
          border-radius: 3px;
          display: inline-block;
          margin-right: 10px;
          color: $darkgrey-font-color;
        }
      }
    }
  }
}
</style>
