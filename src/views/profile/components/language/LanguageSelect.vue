<template>
  <el-select v-model="langValue">
    <el-option :value="`en_US`" :label="`English`"></el-option>
    <el-option :value="`nl_NL`" :label="`Dutch`"></el-option>
    <el-option :value="`fr`" :label="`French`"></el-option>
    <el-option :value="`de`" :label="`German`"></el-option>
    <el-option :value="`it`" :label="`Italian`"></el-option>
    <el-option :value="`es`" :label="`Spanish`"></el-option>
    <el-option :value="`sv`" :label="`Swedish`"></el-option>
    <el-option :value="`pt_BR`" :label="`Portuguese  (Brazilian)`"></el-option>
    <el-option :value="`ja`" :label="`Japanese`"></el-option>
    <el-option :value="`zh_CN`" :label="`Chinese (Simplified)`"></el-option>
    <el-option :value="`zh_TW`" :label="`Chinese (Traditional)`"></el-option>
    <el-option :value="`ko`" :label="`Korean`"></el-option>
    <el-option :value="`th`" :label="`Thai`"></el-option>
    <el-option :value="`fi`" :label="`Russian`"></el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    name: 'LangSelect'
  })
export default class extends Vue {
    @Prop({ required: true }) private langValue!: string
}
</script>
