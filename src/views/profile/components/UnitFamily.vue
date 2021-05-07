<template>
  <el-form label-width="100px">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{$t('navbar.myprofile.unitInformation')}}</span>
          </div>
          <el-form-item :label="$t('userInfo.workCountry')">
            <country-select :country-value="user.workCountry"/>
          </el-form-item>
          <el-form-item :label="$t('userInfo.workRegion')">
            <el-input v-model="user.workRegion"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workLocality')">
            <el-input v-model="user.workLocality"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workStreetAddress')">
            <el-input v-model="user.workStreetAddress"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workPostalCode')">
            <el-input v-model="user.workPostalCode"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workFax')">
            <el-input v-model="user.workFax"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workPhoneNumber')">
            <el-input v-model="user.workPhoneNumber"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.workEmail')">
            <el-input v-model="user.workEmail"/>
          </el-form-item>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{$t('navbar.myprofile.familyInformation')}}</span>
          </div>
          <el-form-item :label="$t('userInfo.homeCountry')">
            <country-select :country-value="user.homeCountry"/>
          </el-form-item>
          <el-form-item :label="$t('userInfo.homeRegion')">

            <el-input v-model="user.homeRegion"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homeLocality')">

            <el-input v-model="user.homeLocality"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homeStreetAddress')">

            <el-input v-model="user.homeStreetAddress"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homePostalCode')">

            <el-input v-model="user.homePostalCode"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homeFax')">

            <el-input v-model="user.homeFax"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homePhoneNumber')">

            <el-input v-model="user.homePhoneNumber"/>
          </el-form-item>

          <el-form-item :label="$t('userInfo.homeEmail')">

            <el-input v-model="user.homeEmail"/>
          </el-form-item>
        </el-card>
      </el-col>
    </el-row>

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
import { Component, Prop, Vue } from 'vue-property-decorator'
import CountrySelect from '@/views/profile/components/country/CountrySelect.vue'
import { IUserInfo } from '@/api/types'

@Component({
  name: 'UnitFamily',
  components: { CountrySelect }
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

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
