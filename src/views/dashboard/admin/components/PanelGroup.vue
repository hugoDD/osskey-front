<template>
  <el-row
    :gutter="40"
    class="panel-group"
  >
    <el-col
      v-for="app in list"
      :key="app.id"
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
<!--          <svg-icon-->
<!--            name="peoples"-->
<!--            class="card-panel-icon"-->
<!--          />-->
          <el-link v-if="'SP'===app.inducer" :href="app.loginUrl" target="_blank" :title="app.name">
            <img :title="app.name" width="65px" height="65px"  style="border:0;"
                 :src="`data:image/png;base64,${app.icon}`"
                 class="card-panel-icon"
            >
          </el-link>
          <el-link v-else-if="'IDP'===app.inducer" :href="`${baseUrl}/authz/${app.id}`" target="_blank" :title="app.name">
            <img :title="app.name" width="65px" height="65px"  style="border:0;"
                 :src="`data:image/png;base64,${app.icon}`"
                 class="card-panel-icon"
            >
          </el-link>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{app.name}}
          </div>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CountTo from 'vue-count-to'
import { getAppList } from '@/api/app/app'
import { IAppData } from '@/api/types'
import { UserModule } from '@/store/modules/user'
import settings from '@/settings'

@Component({
  name: 'PanelGroup',
  components: {
    CountTo
  }
})
export default class extends Vue {
  private total = 0
  private listLoading = true
  private list: IAppData[] = []
  private listQuery = {
    page: 1,
    limit: 20
  }

  created() {
    this.getList()
  }

  get baseUrl() {
    return settings.baseUrl
  }

  get token() {
    return UserModule.token
  }

  async getList() {
    this.listLoading = true
    const { data } = await getAppList()
    this.list = data.items
    this.total = data.total
    console.log(this.list)
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
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
       // float: right;
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

  @media (max-width: 550px) {
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
