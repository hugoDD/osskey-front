<template>
  <div class="top-right-btn">
    <el-row>
      <el-tooltip class="item" effect="dark" :content="showSearch ? '隐藏搜索' : '显示搜索'" placement="top">
        <el-button size="mini" circle icon="el-icon-search" @click="toggleSearch()" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="刷新" placement="top">
        <el-button size="mini" circle icon="el-icon-refresh" @click="refresh()" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="显隐列" placement="top" v-if="columns">
        <el-button size="mini" circle icon="el-icon-menu" @click="showColumn()" />
      </el-tooltip>
    </el-row>
    <el-dialog :title="title" :visible.sync="open" append-to-body>
      <el-transfer
        :titles="['显示', '隐藏']"
        v-model="value"
        :data="columns"
        @change="dataChange"
      ></el-transfer>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'RightToolbar'
})
export default class extends Vue {
  @Prop({ default: true }) private showSearch!: boolean
  @Prop({ required: false }) private columns!: any

  // 显隐数据
  private value: Array<number>= []
  // 弹出层标题
  private title= '显示/隐藏'
  // 是否显示弹出层
  private open= false

  created() {
    // 显隐列初始默认隐藏列
    for (const item in this.columns) {
      // eslint-disable-next-line valid-typeof
      if (typeof 'string' === item && this.columns[item].visible === false) {
        this.value.push(parseInt(item))
      }
    }
  }

  // 搜索
  private toggleSearch() {
    this.$emit('update:showSearch', !this.showSearch)
  }

  // 刷新
  private refresh() {
    this.$emit('queryTable')
  }

  // 右侧列表元素变化
  private dataChange(data: any) {
    for (const item in this.columns) {
      const key = this.columns[item].key
      this.columns[item].visible = !data.includes(key)
    }
  }

  // 打开显隐列dialog
  private showColumn() {
    this.open = true
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-transfer__button {
  border-radius: 50%;
  padding: 12px;
  display: block;
  margin-left: 0px;
}
::v-deep .el-transfer__button:first-child {
  margin-bottom: 10px;
}
</style>
