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
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-row>
	          <v-col cols="12" sm="6">
		          <v-text-field label="Email*" hint="Please enter email, the email as login info." persistent-hint required />
	          </v-col>
	          <v-col cols="12" sm="6">
		          <v-text-field label="Password*" type="password" required></v-text-field>
	          </v-col>
	          <v-col cols="12" sm="6" md="4">
		          <v-text-field label="Name*" required />
	          </v-col>
	          <v-col cols="12" sm="6" md="4">
	            <v-text-field label="Phone number" hint="example of persistent helper text" required />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete :items="[
                'Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey',
                 'Reading', 'Writing', 'Coding','Basejump',
              ]" label="Interests" multiple density="comfortable" variant="outlined"></v-autocomplete>
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
