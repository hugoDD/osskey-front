<template>
  <el-row
    :gutter="40"
    class="panel-group"
  >
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('newVisitis')"
      >
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon
            name="peoples"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
           {{$t('main.rpt.onlineuser')}}
          </div>
          <count-to
            :start-val="0"
            :end-val="rptOnlineUsers"
            :duration="1"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('messages')"
      >
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon
            name="message"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
           {{$t('main.rpt.daycount')}}
          </div>
          <count-to
            :start-val="0"
            :end-val="rptOnlineUsers"
            :duration="5"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('purchases')"
      >
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon
            name="money"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{$t('main.rpt.newuser')}}
          </div>
          <count-to
            :start-val="0"
            :end-val="rptNewUsers"
            :duration="1"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('shoppings')"
      >
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon
            name="shopping"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{$t('main.rpt.activeuser')}}
          </div>
          <count-to
            :start-val="0"
            :end-val="rptActiveUsers"
            :duration="1"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CountTo from 'vue-count-to'
import { getAnalysisMain } from '@/api/app'
import { getOptLogsPage } from '@/api/logs'

@Component({
  name: 'PanelGroup',
  components: {
    CountTo
  }
})
export default class extends Vue {
  private rptDayCount=0
  private rptNewUsers = 0
  private rptOnlineUsers = 0
  private rptActiveUsers =0

  private rptMonth: Map<string, any>[] =[]
  private rptDayHour: Map<string, any>[] =[]
  private rptBrowser: Map<string, any>[] =[]
  private rptApp: Map<string, any>[] =[]

  created() {
    this.getList()
  }

  private async getList() {
    const { data } = await getAnalysisMain()
    this.rptDayCount = data.rptDayCount
    this.rptNewUsers = data.rptNewUsers
    this.rptOnlineUsers = data.rptOnlineUsers
    this.rptActiveUsers = data.rptActiveUsers

    this.rptMonth = data.rptMonth
    this.rptDayHour = data.rptDayHour
    this.rptBrowser = data.rptBrowser
    this.rptApp = data.rptApp
  }

  private handleSetLineChartData(type: string) {
    this.$emit('handle-set-line-chart-data', type)
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
         background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
