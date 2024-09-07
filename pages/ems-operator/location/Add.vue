<template>
  <yhlx-add-dialog location="Toolbar" title="Add Location">
    <template v-slot:content>
      <v-row class="form">
        <v-col cols="12" sm="4">
          <yhlx-text-field label="Name*" hint="Please enter location's name." />
        </v-col>
        <v-col cols="12" sm="8">
          <yhlx-text-field label="Address" />
        </v-col>
        <v-col cols="12">
          <yhlx-text-field label="Notes" />
        </v-col>
        <v-col cols="12">
          <map-container :height="400" />
        </v-col>
      </v-row>
    </template>
  </yhlx-add-dialog>
</template>
<script setup lang="ts">
import MapContainer from '@/components/common/MapContainer.vue'
</script>