export default {
  route: {
    dashboard: '首页',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    draggableDialog: '可拖拽对话框',
    draggableKanban: '可拖拽看板',
    draggableList: '可拖拽列表',
    draggableSelect: '可拖拽选择',
    charts: '图表',
    barChart: '柱状图表',
    lineChart: '折线图',
    mixedChart: '混合图表',
    example: '综合实例',
    safelogs: '安全审计',
    loginLog: '登录日志',
    accessLog: '访问日志',
    operatingLog: '操作日志',
    nested: '路由嵌套',
    menu1: '菜单 1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    table: '表格',
    dynamicTable: '动态表格',
    draggableTable: '可拖拽表格',
    inlineEditTable: '表格内编辑',
    complexTable: '综合表格',
    tab: '分栏',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: '导出 Zip',
    theme: '换肤',
    clipboard: '粘贴板',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心',
    timeline: '时间流光',
    myprofile: {
      title: '我的资料',
      other: '其它资料',
      unitInformation: '单位信息',
      familyInformation: '家庭信息'
    },

    setting: {
      title: '设置',
      security: '安全设置',
      sociallink: '认证关联',
      changepassword: '密码修改',
      appaccount: '应用账号',
      timetoken: '时间令牌'
    },
    audit: {
      title: '审计',
      login: '登录日志',
      signon: '访问日志',
      operation: '操作日志'
    }
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  password: {
    changepassword: '密码修改',
    confirmPassword: '确认新密码',
    expired: '密码过期',
    expiredTip: '密码过期，请修改密码',
    initialChangeTip: '首次登录，请修改初始化密码',
    newPassword: '新密码',
    oldPassword: '原密码'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    createRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。',
    changeLanguageTips: '切换语言成功'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用 window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  global: {
    title: 'MaxKey统一认证系统',
    application: 'Max<span style="color: #FFD700;">Key</span>统一认证系统',
    changeLanguage: '语言选择',
    changeLanguageEn: 'English',
    changeLanguageZh: '中文',
    textWelcome: '欢迎您',
    textManage: '管理',
    textCopyright: '版权所有',
    textCopyrightContent: 'Copyright 2021',
    textCopyrightLicense: 'Licensed under the Apache License, Version 2.0',
    textLogout: '退出',
    logoutTip: '注销成功',
    logoutTextSuffix: '重新登录',
    logoutTextPrefix: '您已经成功退出登录，请关闭浏览器或者'

  },
  userInfo: {
    displayName: '用户名',
    username: '登录账号',
    email: '邮箱地址',
    password: '密码',
    mobile: '手机号码',
    userType: '用户类型',
    picture: '头像',
    familyName: '姓',
    givenName: '名',
    middleName: '中间名',
    nickName: '昵称',
    gender: '性别',
    genderFemale: '女',
    genderMale: '男',
    married: '婚姻状态',
    marriedUnknown: '未知',
    marriedSingle: '单身',
    marriedMarried: '已婚',
    marriedDivorce: '离异',
    marriedWidowed: '丧偶',
    website: '个人主页',
    idtype: '证件类型',
    idtypeUnknown: '未知',
    idtypeIdcard: '身份证',
    idtypePassport: '护照',
    idtypeStudentcard: '学生证',
    idtypeMilitarycard: '军人证',
    idCardNo: '证件号码',
    startWorkDate: '工作开始时间',
    preferredLanguage: '语音偏好',
    timeZone: '时区',
    locale: '语言选择',
    employeeNumber: '员工编号',
    windowsAccount: 'AD域账号',
    organization: '所属机构',
    division: '分支机构',
    department: '部门',
    costCenter: '成本中心',
    jobTitle: '职位',
    jobLevel: '级别',
    manager: '上级经理',
    assistant: '助理',
    entryDate: '入职时间',
    quitDate: '离职时间',
    workCountry: '国家',
    workRegion: '省',
    workLocality: '城市',
    workStreetAddress: '地址',
    workPostalCode: '邮编',
    workFax: '传真',
    workPhoneNumber: '工作电话',
    workEmail: '工作邮件',
    homeCountry: '国家',
    homeRegion: '省',
    homeLocality: '城市',
    homeStreetAddress: '家庭地址',
    homePostalCode: '家庭邮编',
    homeFax: '家庭传真',
    homePhoneNumber: '家庭电话',
    homeEmail: '家庭邮箱',
    theme: '主题',
    themeDefault: '黑色经典',
    themeMinty: '薄荷清新',
    themePulse: '激情紫荆',
    authnType: '登录方式',
    authnType1: '普通登录',
    authnType2: '手机令牌',
    authnType3: '短信验证',
    authnType4: '邮件验证',
    authnType5: '时间令牌',
    authnType6: '计数器令牌',
    authnType7: 'HOTP令牌',
    authnType8: 'RSA令牌',
    authnType9: '数字证书',
    authnType10: 'USB Key'
  },
  log: {
    loginhistory: {
      id: '编号',
      sessionId: '会话',
      username: '登录名',
      displayName: '用户名称',
      provider: '提供商',
      message: '状态',
      loginType: '登录方式',
      sourceIp: '访问地址',
      browser: '浏览器',
      loginTime: '登录时间',
      logoutTime: '退出时间',
      platform: '平台',
      application: '应用',
      loginUrl: '登录地址',
      code: '代码',
      rpUserInfo: '第三方'
    },
    loginappshistory: {
      id: '编号',
      sessionId: '会话',
      uid: '用户编号',
      username: '登录名',
      displayName: '用户名',
      appId: '应用编号',
      appName: '应用名称',
      loginTime: '登录时间'
    },
    operate: {
      servicename: '服务',
      message: '消息',
      content: '内容',
      messageType: '消息类型',
      operateType: '操作类型',
      username: '操作人'
    }
  },
  apps: {
    number: '序号',
    icon: '图标',
    name: '应用名称',
    protocol: '访问协议',
    category: '类型',
    account: '账号',
    oauth: {
      approval: {
        title: 'OAuth 授权请求',
        info: '此第三方应用请求获得以下权限:',
        context: '访问你的个人信息',
        authorize: '同意授权'
      }
    }
  },
  common: {
    window: {
      title: '窗口'
    },
    alert: {
      title: '提示信息',
      closeText: '关闭'
    },
    conform: {
      title: '确认提示',
      yes: '确定',
      no: '关闭'
    },
    select: {
      hintText: '请选择您要操作的数据'
    },
    delete: {
      hintText: '您确定要删除吗?'
    },
    grid: {
      loadtext: '正在加载...',
      loadnodata: '没有查询到符合数据'
    },
    submit: {
      hintText: '您确定要进行此项操作吗?',
      errorText: '执行操作失败'
    },
    text: {
      to: '至',
      startdate: '开始时间',
      enddate: '结束时间',
      createdby: '创建人',
      createddate: '创建时间',
      modifiedby: '修改人',
      modifieddate: '修改时间',
      status: {
        enabled: '启用',
        disabled: '停用'
      }
    }
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色'
  }
}
