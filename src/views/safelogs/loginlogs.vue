<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="searchModel.sourceIp"
        :placeholder="$t('table.title')"
        v-re="opt"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        {{ $t('table.search') }}
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >

      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.sessionId')"
      >
        <template slot-scope="{row}">
          <span>{{ row.sessionId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.username')"
      >
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.displayName')"
      >
        <template slot-scope="{row}">
          <span>{{ row.displayName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.provider')"
      >
        <template slot-scope="{row}">
          <span>{{ row.provider }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.message')"
      >
        <template slot-scope="{row}">
          <span>{{ row.message }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.loginType')"
      >
        <template slot-scope="{row}">
          <span>{{ row.loginType }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.sourceIp')"
      >
        <template slot-scope="{row}">
          <span>{{ row.sourceIp }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.browser')"
      >
        <template slot-scope="{row}">
          <span>{{ row.browser }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.loginTime')"
      >
        <template slot-scope="{row}">
          <span>{{ row.loginTime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.logoutTime')"
      >
        <template slot-scope="{row}">
          <span>{{ row.logoutTime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.platform')"
      >
        <template slot-scope="{row}">
          <span>{{ row.platform }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.application')"
      >
        <template slot-scope="{row}">
          <span>{{ row.application }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.loginUrl')"
      >
        <template slot-scope="{row}">
          <span>{{ row.loginUrl }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.code')"
      >
        <template slot-scope="{row}">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('log.loginhistory.rpUserInfo')"
      >
        <template slot-scope="{row}">
          <span>{{ row.rpUserInfo }}</span>
        </template>
      </el-table-column>

    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.pageNumber"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IHistoryLogin, IPageParam } from '@/api/types'
import Pagination from '@/components/Pagination/index.vue'
import { getLoginLogsPage } from '@/api/logs'
import { PageParam } from '@/class/PageParam'

@Component({
  name: 'LoginLog',
  components: {
    Pagination
  }
})
export default class extends Vue {
  private total = 0
  private list: IHistoryLogin[] = []
  private listLoading = true
  private listQuery : IPageParam = new PageParam()
  private opt: Map<string, Array<string>> = new Map()
  private searchModel : IHistoryLogin = {
    id: '',
    sessionId: '',
    uid: '',
    username: '',
    displayName: '',
    loginType: '',
    message: '',
    code: '',
    provider: '',
    sourceIp: '',
    browser: '',
    platform: '',
    application: '',
    loginUrl: '',
    loginTime: '',
    logoutTime: ''
  }

  created() {
    this.opt.clear()
    this.getList()
  }

  private handleFilter() {
    this.listQuery.allOpt(this.searchModel, this.opt)
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    const { data } = await getLoginLogsPage(this.listQuery)
    this.list = data.items
    this.total = data.total
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
