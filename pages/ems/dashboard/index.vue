<template>
  <v-row class="pa-4">
    <v-col cols="12" lg="12">
	    <Overview />
    </v-col>
    <v-col cols="12" lg="12">
      <StatsCard />
    </v-col>
    <v-col cols="12" lg="8">
      <VisitsLineCard />
    </v-col>
    <v-col cols="12" lg="4">
      <VisitsCard />
    </v-col>
    <v-col cols="12" lg="6">
      <TicketsCard />
    </v-col>
    <v-col cols="12" lg="6">
      <TableCard />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import Overview from "./components/Overview.vue";

import StatsCard from "@/components/dashboard/StatsCard.vue";
import VisitsCard from "~/components/dashboard/VisitsCard.vue";
import VisitsLineCard from "~/components/dashboard/VisitsLineCard.vue";
import TableCard from "~/components/dashboard/TableCard.vue";
import TicketsCard from "~/components/dashboard/TicketsCard.vue";

</script>

<style scoped lang="scss"></style>
