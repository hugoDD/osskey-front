<template>
  <el-form label-width="100px">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <el-form-item :label="$t('userInfo.username')">
            <el-input v-model.trim="user.username"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.userType')">
            <el-input v-model.trim="user.userType"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.displayName')">
            <el-input v-model.trim="user.displayName"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.familyName')">
            <el-input v-model.trim="user.familyName"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.givenName')">
            <el-input v-model.trim="user.givenName"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.middleName')">
            <el-input v-model.trim="user.middleName"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.nickName')">
            <el-input v-model.trim="user.nickName"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.gender')">
            <el-select v-model="user.gender" placeholder="请选择">
              <el-option :label="$t('userInfo.genderFemale')" :value="1"></el-option>
              <el-option :label="$t('userInfo.genderMale')" :value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('userInfo.married')">
            <el-select v-model="user.married">
              <el-option :value="0" :label="$t('userInfo.marriedUnknown')"/>
              <el-option :value="1" :label="$t('userInfo.marriedSingle')"/>
              <el-option :value="2" :label="$t('userInfo.marriedMarried')"/>
              <el-option :value="3" :label="$t('userInfo.marriedDivorce')"/>
              <el-option :value="4" :label="$t('userInfo.marriedWidowed')"/>
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('userInfo.website')">
            <el-input v-model="user.webSite"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.idtype')">
            <el-select v-model="user.idType">
              <el-option :label="$t('userInfo.idtypeUnknown')" :value="0"></el-option>
              <el-option :label="$t('userInfo.idtypeIdcard')" :value="1"></el-option>
              <el-option :label="$t('userInfo.idtypePassport')" :value="2"></el-option>
              <el-option :label="$t('userInfo.idtypeStudentcard')" :value="3"></el-option>
              <el-option :label="$t('userInfo.idtypeMilitarycard')" :value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('userInfo.idCardNo')">
            <el-input v-model="user.idCardNo"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.startWorkDate')">
            <el-date-picker type="date" v-model="user.startWorkDate" placeholder="选择日期"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.preferredLanguage')">
            <lang-select :lang-value="user.preferredLanguage"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.timeZone')">
            <time-zone-select :time-zone-value="user.timeZone"></time-zone-select>
          </el-form-item>

          <el-form-item :label="$t('userInfo.locale')">
            <lang-select :lang-value="user.locale"/>
          </el-form-item>

        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-form-item :label="$t('userInfo.picture')">
           <img :src="`data:image/gif;base64,${user.picture}`" width="260px" height="250px" />
          </el-form-item>

          <el-form-item :label="$t('userInfo.employeeNumber')">
            <el-input v-model="user.employeeNumber"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.windowsAccount')">
            <el-input v-model="user.windowsAccount"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.organization')">
            <el-input v-model="user.organization"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.division')">
            <el-input v-model="user.division"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.department')">
            <el-input v-model="user.department"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.costCenter')">
            <el-input v-model="user.costCenter"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.jobTitle')">
            <el-input v-model="user.jobTitle"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.jobTitle')">
            <el-input v-model="user.jobTitle"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.manager')">
            <el-input v-model="user.manager"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.entryDate')">
            <el-date-picker type="date" v-model="user.entryDate" placeholder="选择日期"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.quitDate')">
            <el-date-picker type="date" v-model="user.quitDate" placeholder="选择日期"/>
          </el-form-item>
        </el-card>
      </el-col>

    </el-row>
    <el-row></el-row>

    <el-row>
      <el-col :span="8" :offset="16">
        <el-form-item>
          <el-button
            type="primary"
            @click="submit"
          >
            Update
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { IUserInfo } from '@/api/types'
import { Component, Prop, Vue } from 'vue-property-decorator'
import LangSelect from '@/views/profile/components/language/LanguageSelect.vue'
import TimeZoneSelect from '@/views/profile/components/timeZone/TimeZoneSelect.vue'

  @Component({
    name: 'MyProfile',
    components: { TimeZoneSelect, LangSelect }
  })
export default class extends Vue {
    @Prop({ required: true }) private user!: IUserInfo

    private submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }
</style>
