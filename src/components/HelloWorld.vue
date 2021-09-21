<template>
<v-container>
    <v-row>
        <v-col class="text-center">
            <h1>Hello World Here!</h1>
        </v-col>
        <v-col class="text-center">
            <h1>Hello Friend!</h1>
        </v-col>
        <v-col class="text-center">
            <h1>Hello There!</h1>
        </v-col>
    </v-row>

    <!-- start Form -->
    <form>
        <v-text-field v-model="name" :counter="10" label="Name" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>

        <v-btn class="mr-4" @click="submit">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
    <!-- End Form -->

</v-container>
</template>

<script>

import { addDoc } from 'firebase/firestore/lite';
import { theCollect } from '../firebase';
export default {
    name: "HelloWorld",

    data: () => ({
        name: "",
        email: ""
    }),
    methods:{
      clear(){
        this.name="",
        this.email=""
      },
      submit(){
        addDoc(theCollect,{
          name:this.name,
          email:this.email
        })
      }
    }
};
</script>
