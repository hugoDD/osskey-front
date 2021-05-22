<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="searchModel.appName"
        :placeholder="$t('apps.name')"
        v-re="opt"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-date-picker
        v-model="searchModel.loginTime"
        v-range="opt"
        type="datetimerange"
        :range-separator="$t('common.text.to')"
        :start-placeholder="$t('common.text.startdate')"
        :end-placeholder="$t('common.text.enddate')"
        style="width: 380px;"
        class="filter-item"
        value-format="yyyy-MM-dd HH:mm:ss"
        @keyup.enter.native="handleFilter">
      </el-date-picker>
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
        width="350"
        align="center"
        :label="$t('log.loginappshistory.sessionId')"
      >
        <template slot-scope="{row}">
          <span>{{ row.sessionId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        align="center"
        :label="$t('log.loginappshistory.username')"
      >
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        align="center"
        :label="$t('log.loginappshistory.displayName')"
      >
        <template slot-scope="{row}">
          <span>{{ row.displayName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('log.loginappshistory.appName')"
      >
        <template slot-scope="{row}">
          <span>{{ row.appName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        align="center"
        :label="$t('log.loginappshistory.loginTime')"
      >
        <template slot-scope="{row}">
          <span>{{ row.loginTime }}</span>
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
import { IAccessLogin, IPageParam } from '@/api/types'
import Pagination from '@/components/Pagination/index.vue'
import { getAccessLogsPage } from '@/api/logs'
import { PageParam } from '@/class/PageParam'

@Component({
  name: 'AccessLogs',
  components: {
    Pagination
  }
})
export default class extends Vue {
  private total = 0
  private list: IAccessLogin[] = []
  private listLoading = true
  private listQuery : IPageParam = new PageParam()
  private opt: Map<string, Array<string>> = new Map()
  private searchModel : IAccessLogin = {
    id: '',
    sessionId: '',
    appId: '',
    appName: '',
    uid: '',
    username: '',
    displayName: '',
    loginTime: ''
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
    const { data } = await getAccessLogsPage(this.listQuery)
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
