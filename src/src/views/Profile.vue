<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-snackbar
                    v-model="snackbar"
                    absolute
                    top
                    right
                    :timeout="3000"
                    color="success"
                >
                    <span>Saved!</span>
                    <v-icon dark>check_circle</v-icon>
                </v-snackbar>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="profile.name"
                        :rules="rules.name"
                        :counter="10"
                        label="姓名"
                        required
                        clearable
                    ></v-text-field>
                    <v-select
                        v-model="profile.gender"
                        :items="genderItems"
                        :rules="rules.gender"
                        label="性別"
                        required
                    ></v-select>
                    <v-text-field
                        type="number"
                        v-model="profile.height"
                        :rules="rules.height"
                        label="身高"
                        suffix="公分"
                        required
                        clearable
                    ></v-text-field>
                    <v-text-field
                        type="number"
                        v-model="profile.bodyWeight"
                        :rules="rules.bodyWeight"
                        label="體重"
                        suffix="公斤"
                        required
                        clearable
                    ></v-text-field>
                    <v-text-field
                        type="number"
                        v-model="profile.bodyFat"
                        label="體脂"
                        suffix="%"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        type="number"
                        v-model="profile.fat"
                        label="脂肪重量"
                        suffix="公斤"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        type="number"
                        v-model="profile.muscle"
                        label="肌肉重量"
                        suffix="公斤"
                        clearable
                    ></v-text-field>
                    <v-btn
                        color="success"
                        :disabled="!valid"
                        @click="onSubmit"
                        >送出</v-btn>
                    <v-btn
                        color="warning"
                        @click="onClear">清除</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    const defaultProfile = Object.freeze({
      name: '',
      gender: '不顯示',
      height: null, // cm
      bodyWeight: null, // kg
      bodyFat: null, // %
      fat: null, // kg
      muscle: null, // kg
    });
    return {
      profile: Object.assign({}, defaultProfile),
      defaultProfile,
      rules: {
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        gender: [v => !!v || 'Item is required'],
        height: [v => !!v || 'Item is required'],
        bodyWeight: [v => !!v || 'Item is required'],
      },
      genderItems: ['男性', '女性', '不顯示'],
      privacy: false,
      valid: true,
      snackbar: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.onClear();
      }
    },
    onClear() {
      this.profile = Object.assign({}, this.defaultProfile);
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>
