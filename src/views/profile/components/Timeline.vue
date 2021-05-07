<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeLineList"
        :key="index"
        :timestamp="item.loginTime"
        placement="top"
      >
        <el-card>
          <h4>{{ item.loginType}}</h4>
          <p>{{ item.displayName }}通过{{item.browser}}浏览器登录，</p>
          <p>{{item.logoutTime}}退出登录.</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { loginLogs } from '@/api/profile'
import { IHistoryLogin } from '@/api/types'
import { defaultPageParam } from '@/utils/utils'

@Component({
  name: 'Timeline'
})
export default class extends Vue {
  private total = 0
  private timeLineList: IHistoryLogin[] = []

  created() {
    this.getLoginLogs()
  }

  private async getLoginLogs() {
    const { data } = await loginLogs(defaultPageParam)
    this.timeLineList = data.items
    this.total = data.total
  }
}
</script>
