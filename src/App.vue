<template>
<v-app>

    <v-card color="grey lighten-4" dark flat tile>
        <v-toolbar dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <h3><span class="blue--text">Ahmed</span><span class="yellow--text">Eldeib</span></h3>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>

    <!-- start navigation -->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>

        <v-list nav dense>

            <v-list-item-group active-class="deep-purple--text text--accent-4">

                <v-row class="my-3 ml-3">
                    <h2>#AhmedEldeib</h2>
                </v-row>
                <v-row class="justify-center my-10">
                    <v-avatar height="100px" width="100px">
                        <img src="@/assets/mypic.jpg" alt="AhmedEldeib">
                    </v-avatar>
                </v-row>

                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- end navigation -->

    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        drawer: false
    }),
};
</script>
