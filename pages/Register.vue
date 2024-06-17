<template>
  <v-card class="overflow-auto" style="box-shadow: none; width: 720px;position: absolute;top;top: 50%;right: 50%;transform: translate(50%, -50%);">
			<v-container>
                <img width="160" src="@/assets/images/logo.svg" alt="" style="width: 320px"/>
				<v-card-text>
					<v-form v-model="valid">
                        <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <yhlx-text-field label="Email*" placeholder="johndoe@gmail.com" hint="Please enter email, the email as login info." required />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <yhlx-text-field label="Password*" type="password" required />
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <yhlx-text-field label="Name*" required />
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <yhlx-text-field label="Phone Number" required />
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <yhlx-select :items="['0-17', '18-29', '30-54', '54+']" label="Age" required />
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<!-- <yhlx-btn business-type="Close" variant="text" @click="dialog = false">Close</yhlx-btn> -->
					<yhlx-btn business-type="Primary" @click="submit">Save</yhlx-btn>
				</v-card-actions>
			</v-container>
		</v-card>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const dialog = ref(false);
const appStore = useAppStore();
onMounted(()=>{
    appStore.setIsLogin(false)
})
onUnmounted(() => {
    appStore.setIsLogin(true)
})
const submit = ()=> {

}
</script>