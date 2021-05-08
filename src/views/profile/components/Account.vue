<template>
  <el-form ref="user"
           :model="user"
           :rules="rules"
           class="form-container">
    <el-form-item :label="$t('userInfo.username')">
      <el-input v-model.trim="user.name" readonly="true"/>
    </el-form-item>
    <el-form-item :label="$t('userInfo.email')">
      <el-input v-model.trim="user.email" readonly="true"/>
    </el-form-item>
    <el-form-item :label="$t('userInfo.mobile')">
      <el-input v-model.trim="user.mobile" readonly="true"/>
    </el-form-item>
    <el-form-item :label="$t('password.oldPassword')" prop="oldPassword">
      <el-input type="password" v-model.trim="user.oldPassword" />
    </el-form-item>
    <el-form-item :label="$t('password.newPassword')" prop="newPassword">
      <el-input type="password" v-model.trim="user.newPassword" />
    </el-form-item>
    <el-form-item :label="$t('password.confirmPassword')" prop="confirmPassword">
      <el-input type="password" v-model.trim="user.confirmPassword" />
    </el-form-item>
    <el-form-item>
      <el-button
        v-loading="loading"
        type="success"
        @click="submitForm"
      >
        Update
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IProfile } from '@/api/types'
import { Form } from 'element-ui'
import { changePasswod } from '@/api/profile'

@Component({
  name: 'Account'
})
export default class extends Vue {
  @Prop({ required: true }) private user!: IProfile

  private loading = false

  private validateRequire = (rule: any, value: string, callback: Function) => {
    if (value === '') {
      this.$message({
        message: rule.field + ' is required',
        type: 'error'
      })
      callback(new Error(rule.field + ' is required'))
    } else {
      callback()
    }
  }

  private validatePass = (rule: any, value: string, callback: Function) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (this.user.confirmPassword !== '') {
        (this.$refs.user as Form).validateField('confirmPassword')
      }
      callback()
    }
  }

  private checkPass = (rule: any, value: string, callback: Function) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== this.user.newPassword) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  };

  private rules = {
    oldPassword: [{ validator: this.validateRequire, trigger: 'blur' }],
    newPassword: [{ validator: this.validatePass, trigger: 'blur' }],
    confirmPassword: [{ validator: this.checkPass, trigger: 'blur' }]
  }

  private submit() {
    this.$message({
      message: 'User information has been updated successfully',
      type: 'success',
      duration: 5 * 1000
    })
  }

  private submitForm() {
    (this.$refs.user as Form).validate(async(valid) => {
      if (valid) {
        this.loading = true

        await changePasswod({
          oldPassword: this.user.oldPassword,
          newPassword: this.user.newPassword,
          confirmPassword: this.user.confirmPassword
        })
        this.$notify({
          title: 'Success',
          message: 'The post published successfully',
          type: 'success',
          duration: 2000
        })

        // Just to simulate the time of the request
        setTimeout(() => {
          this.loading = false
        }, 0.5 * 1000)
      } else {
        console.error('Submit Error!')
        return false
      }
    })
  }
}
</script>
