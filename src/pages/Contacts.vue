<script>
import TitlePage from "../components/TitlePage.vue";
import Separator from "../components/Separator.vue";
import ContactsCard from "../components/ContactsCard.vue";
import ContactsMap from "../components/ContactsMap.vue";

export default {
  components: {
    TitlePage,
    Separator,
    ContactsCard,
    ContactsMap
  },
};
</script>

<template>
  <!-- title -->
  <TitlePage :titlePage="'Contacts Page'"></TitlePage>
  <!-- positione relative(map) + absolute(info-card) -->
  <div class="map-container mt-5">
    <!-- map -->
    <ContactsMap myWidth="100%" myHeight="600px" />
    <!-- info card -->
    <ContactsCard />
  </div>
</template>

<style scoped>
.map-container {
  position: relative;
}
</style>
