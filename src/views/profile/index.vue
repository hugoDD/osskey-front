<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col
          :span="6"
          :xs="24"
        >
          <user-card :user="user" />
        </el-col>
        <el-col
          :span="18"
          :xs="24"
        >
          <el-card>
            <el-tabs v-model="activeTab">
<!--              <el-tab-pane-->
<!--                label="Activity"-->
<!--                name="activity"-->
<!--              >-->
<!--                <activity />-->
<!--              </el-tab-pane>-->
              <el-tab-pane
                :label="$t('navbar.timeline')"
                name="timeline"
              >
                <timeline />
              </el-tab-pane>
              <el-tab-pane
                :label="$t('navbar.setting.changepassword')"
                name="account"
              >
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane :label="$t('navbar.myprofile.title')" name="myProfile">
                <my-profile :user="userInfo"></my-profile>
              </el-tab-pane>
              <el-tab-pane :label="$t('navbar.myprofile.other')" name="unitFamily">
                <unit-family :user="userInfo"/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import MyProfile from './components/MyProfile.vue'
import Account from './components/Account.vue'
import Activity from './components/Activity.vue'
import Timeline from './components/Timeline.vue'
import UserCard from './components/UserCard.vue'
import { IUserInfo, IProfile } from '@/api/types'
import { getMyProfile } from '@/api/profile'
import UnitFamily from '@/views/profile/components/UnitFamily.vue'

const defaultProfile: IProfile = {
  name: 'Loading...',
  email: 'Loading...',
  mobile: 'Loading...',
  avatar: 'Loading...',
  introduction: 'Loading...',
  roles: 'Loading...',
  oldPassword: 'Loading...',
  newPassword: 'Loading...',
  confirmPassword: 'Loading...'
}

@Component({
  name: 'Profile',
  components: {
    UnitFamily,
    MyProfile,
    Account,
    Activity,
    Timeline,
    UserCard
  }
})
export default class extends Vue {
  private userInfo: IUserInfo | undefined
  private user = defaultProfile
  private activeTab = 'Account'

  get name() {
    return UserModule.name
  }

  get email() {
    return UserModule.email
  }

  get avatar() {
    return UserModule.avatar
  }

  get roles() {
    return UserModule.roles
  }

  get introduction() {
    return UserModule.introduction
  }

  get mobile() {
    return UserModule.mobile
  }

  created() {
    this.getUser()
    this.getMyProfile()
    console.log(this.user)
  }

  private getUser() {
    this.user = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      avatar: this.avatar,
      introduction: this.introduction,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      roles: this.roles.join(' | ')
    }
  }

  private async getMyProfile() {
    const { data } = await getMyProfile()
    this.userInfo = data
  }
}
</script>
