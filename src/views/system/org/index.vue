<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch">
      <el-form-item label="部门名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入部门名称"
          clearable
          size="small"
          v-re="opt"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" v-eq="opt" placeholder="部门状态" clearable size="small">
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:dept:add']"
        >新增</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table
      v-loading="loading"
      :data="deptList"
      row-key="id"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="name" label="部门名称" width="260"></el-table-column>
      <el-table-column prop="sortIndex" label="排序" width="200"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter="statusFormat" width="100"></el-table-column>
      <el-table-column label="创建时间" align="center" prop="createdDate" width="200">
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dept:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-plus"
            @click="handleAdd(scope.row)"
            v-hasPermi="['system:dept:add']"
          >新增</el-button>
          <el-button
            v-if="scope.row.parentId !== 0"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dept:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改部门对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="24" v-if="form.parentId !== 0">
            <el-form-item :label="$t('org.pname')" prop="parentId">
              <treeselect v-model="form.parentId" :options="deptOptions" :normalizer="normalizer" placeholder="选择上级部门" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.name')" prop="name">
              <el-input v-model="form.name" placeholder="请输入部门名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.fullname')" prop="fullname">
              <el-input v-model="form.fullname" placeholder="请输入部门名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.sortorder')" prop="sortIndex">
              <el-input-number v-model="form.sortIndex" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.contact')" prop="caontact">
              <el-input v-model="form.contact" :placeholder="$t('org.contact')" maxlength="20" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.phone')" prop="phone">
              <el-input v-model="form.phone" :placeholder="$t('org.phone')" maxlength="11" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.email')" prop="email">
              <el-input v-model="form.email" :placeholder="$t('org.email')" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门状态">
              <el-radio-group v-model="form.status">
                <el-radio
                  v-for="dict in statusOptions"
                  :key="dict.dictValue"
                  :label="dict.dictValue"
                >{{dict.dictLabel}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.fax')" prop="fax">
              <el-input v-model="form.fax" :placeholder="$t('org.fax')" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.country')" prop="country">
              <country-select :country-value="form.country"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.region')" prop="region">
              <el-cascader
                size="large"
                :options="regionOptions"
                v-model="selectedOptions"
                @change="handleRegionChange">
              </el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.street')" prop="street">
              <el-input v-model="form.street"  maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('org.address')" prop="address">
              <el-input v-model="form.address"  maxlength="50" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RightToolbar from '@/components/RightToolbar/index.vue'
import CountrySelect from '@/views/profile/components/country/CountrySelect.vue'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { IPageParam, Organizations } from '@/api/types'
import { defaultOrg } from '@/api/defaultTypes'
import { addDept, delDept, listOrgs, updateDept } from '@/api/app/orgs'
import { Form } from 'element-ui'
import { handleTree, selectDictLabel } from '@/utils/global'
import { PageParam } from '@/class/PageParam'
import { regionDataPlus, CodeToText } from 'element-china-area-data'
import { sysNormalDisable } from '@/utils/options'

@Component({
  name: 'Organizations',
  components: { Treeselect, CountrySelect, RightToolbar }
})
export default class extends Vue {
    myThis:any = this
    // 遮罩层
    private loading= true
    // 显示搜索条件
    private showSearch= true
    // 表格树数据
    private deptList: Organizations[]= []
    // 部门树选项
    private deptOptions: Organizations[]= []
    // 弹出层标题
    private title= ''
    // 是否显示弹出层
    private open= false
    // 状态数据字典
    private statusOptions= sysNormalDisable
    private regionOptions = regionDataPlus
    private selectedOptions = []

    private opt: Map<string, Array<string>> = new Map()
    private listQuery : IPageParam = new PageParam()
    // 查询参数
    private queryParams:Organizations = defaultOrg
    // 表单参数
    private form: Organizations= defaultOrg
    // 表单校验
    private rules= {
      parentId: [
        { required: true, message: '上级部门不能为空', trigger: 'blur' }
      ],
      deptName: [
        { required: true, message: '部门名称不能为空', trigger: 'blur' }
      ],
      orderNum: [
        { required: true, message: '显示排序不能为空', trigger: 'blur' }
      ],
      email: [
        {
          type: 'email',
          message: "'请输入正确的邮箱地址",
          trigger: ['blur', 'change']
        }
      ],
      phone: [
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: '请输入正确的手机号码',
          trigger: 'blur'
        }
      ]
    }

    created() {
      this.getList()
    }

    private handleRegionChange(value:[]) {
      const regionName: Array<string> = []
      value.forEach(value1 => regionName.push(CodeToText[value1]))
      this.form.region = regionName[0]
      this.form.locality = regionName[1] + regionName[2]

      console.log(value)
    }

    // 字典状态字典翻译
    private statusFormat(row:any) {
      return selectDictLabel(this.statusOptions, row.status)
    }

    /** 查询部门列表 */
    private async getList() {
      this.loading = true
      const { data } = await listOrgs(this.listQuery)
      this.deptList = handleTree(data.items, 'id', 'parentId', 'children')
      // this.total = data.total
      // Just to simulate the time of the request
      setTimeout(() => {
        this.loading = false
      }, 0.5 * 1000)
    }

    /** 转换部门数据结构 */
    private normalizer(node: any) {
      if (node.children && !node.children.length) {
        delete node.children
      }
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    }

    // 取消按钮
    private cancel() {
      this.open = false
      this.reset()
    }

    // 表单重置
    private reset() {
      // this.form = {
      //   deptId: undefined,
      //   parentId: undefined,
      //   deptName: undefined,
      //   orderNum: undefined,
      //   leader: undefined,
      //   phone: undefined,
      //   email: undefined,
      //   status: "0"
      // };
      this.form = defaultOrg
      this.myThis.resetForm(this.$refs.form as Form)
    }

    /** 搜索按钮操作 */
    private handleQuery() {
      this.listQuery.allOpt(this.queryParams, this.opt)
      this.getList()
    }

    /** 重置按钮操作 */
    private resetQuery() {
      this.myThis.resetForm(this.$refs.queryForm as Form)
      this.handleQuery()
    }

    /** 新增按钮操作 */
    private handleAdd(row: any) {
      this.reset()
      if (row !== undefined) {
        this.form.parentId = row.deptId
      }
      this.open = true
      this.title = '添加部门'
      this.deptOptions = this.deptList
      // listDept().then(response => {
      // eslint-disable-next-line no-mixed-spaces-and-tabs,no-tabs
	    // this.deptOptions = this.handleTree(response.data, "deptId");
      // });
    }

    /** 修改按钮操作 */
    private handleUpdate(row: any) {
      this.reset()
      this.form = row
      this.deptOptions = this.deptList
      this.open = true
      this.title = '修改部门'
      // getDept(row.deptId).then(response => {
      //   this.form = response.data;
      //   this.open = true;
      //   this.title = "修改部门";
      // });
      // listDeptExcludeChild(row.deptId).then(response => {
      //  this.deptOptions = this.handleTree(response.data, "deptId");
      // });
    }

    /** 提交按钮 */
    private submitForm() {
      (this.$refs.form as Form).validate(valid => {
        if (valid) {
          if (this.form.id !== undefined && this.form.id !== '') {
            updateDept(this.form).then(response => {
              this.myThis.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addDept(this.form).then(response => {
              this.myThis.msgSuccess('新增成功')
              this.open = false
              this.getList()
            })
          }
        }
      })
    }

    /** 删除按钮操作 */
    private handleDelete(row: any) {
      this.$confirm('是否确认删除名称为"' + row.deptName + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return delDept(row.deptId)
      }).then(() => {
        this.getList()
        this.myThis.msgSuccess('删除成功')
      })
    }
}
</script>
