<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="searchModel.serviceName"
        :placeholder="$t('log.operate.servicename')"
        v-re="opt"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-date-picker
        v-model="searchModel.createdDate"
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
      <el-table-column type="expand">
        <template slot-scope="{row}">
          <span> {{ $t('log.operate.content') }}</span>
          <json-viewer
            :value="row.content"
            expand-depth={5}
            copyable="{copyText: '复制',copiedText: '复制成功',align: 'left'}"
            boxed
          sort></json-viewer>
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        align="center"
        :label="$t('log.operate.servicename')"
      >
        <template slot-scope="{row}">
          <span>{{ row.serviceName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        align="center"
        :label="$t('log.operate.message')"
      >
        <template slot-scope="{row}">
          <span>{{ row.message }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="80"
        :label="$t('log.operate.messageType')"
      >
        <template slot-scope="{row}">
          <span>{{ row.messageType }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="80"
        align="center"
        :label="$t('log.operate.operateType')"
      >
        <template slot-scope="{row}">
          <span>{{ row.operateType }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="80"
        align="center"
        :label="$t('log.operate.username')"
      >
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="280"
        align="center"
        :label="$t('common.text.createdby')"
      >
        <template slot-scope="{row}">
          <span>{{ row.createdBy }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        align="center"
        :label="$t('common.text.createddate')"
      >
        <template slot-scope="{row}">
          <span>{{ row.createdDate }}</span>
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
import { IHistoryLogs, IPageParam } from '@/api/types'
import Pagination from '@/components/Pagination/index.vue'
import JsonViewer from '@/components/JsonViewer/index.vue'
import { getOptLogsPage } from '@/api/logs'
import { PageParam } from '@/class/PageParam'

  @Component({
    name: 'OptLogs',
    components: {
      Pagination,
      JsonViewer
    }
  })
export default class extends Vue {
    private total = 0
    private list: IHistoryLogs[] = []
    private listLoading = true
    private listQuery : IPageParam = new PageParam()
    private opt: Map<string, Array<string>> = new Map()
    private searchModel : IHistoryLogs = {
      id: '',
      serviceName: '',
      message: '',
      content: '',
      messageType: '',
      operateType: '',
      username: '',
      code: '',
      createdBy: '',
      createdDate: ''
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
      const { data } = await getOptLogsPage(this.listQuery)
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
