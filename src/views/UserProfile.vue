<template>
  <div id="user-profile">
    <div class="user-content">
      <Profile />
      <EditProfile />
    </div>
    <TeamMembers />
  </div>
</template>

<script>
import Profile from "@/components/UserProfile/Profile.vue";
import EditProfile from "@/components/UserProfile/EditProfile.vue";
import TeamMembers from "@/components/UserProfile/TeamMembers.vue";

export default {
  name: "userprofile",
  components: {
    Profile,
    EditProfile,
    TeamMembers
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.user-content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
