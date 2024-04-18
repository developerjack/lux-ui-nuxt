<script setup lang="ts">
import YhlxBtn from "@/components/YhlxBtn.vue";
const props = defineProps({
	location: String, // 参考YhlxBtn
});

const { location } = toRefs(props);
const dialog = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Dialog -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-dialog v-model="dialog" persistent max-width="800">
    <template v-slot:activator="{ props }">
	    <yhlx-btn business-type="Add" :location="location" v-bind="props">Add Customer</yhlx-btn>
    </template>
    <v-card style="max-height: 600px" class="overflow-auto">
      <v-container>
        <v-card-title class="pa-5">
          <span class="text-h5">RF Card</span>
        </v-card-title>
        <v-card-text>
          <v-row>
	          <v-col cols="12" sm="6">
		          <v-text-field label="ID Tag*" hint="Please enter ID Tag." persistent-hint required />
	          </v-col>
	          <v-col cols="12" sm="6">
		          <v-text-field label="Expiry Time" type="date"></v-text-field>
	          </v-col>
          </v-row>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false" variant="tonal" class="px-4">
            Close
          </v-btn>
          <v-btn color="success" @click="dialog = false" variant="tonal" class="px-4">
            Save
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
