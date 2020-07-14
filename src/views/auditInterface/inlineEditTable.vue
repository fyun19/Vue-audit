<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="接口类型" prop="title">
        <!-- <template slot-scope="row">
          {{ row.title }} -->
        <!-- <el-select v-model="row.title" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->
        <!-- </template> -->
      </el-table-column>
      <el-table-column label="接口名称" prop="interface">
        <!-- <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template> -->
      </el-table-column>
      <el-table-column min-width="80px" prop="title" label="网络名称">
        <template slot-scope="{ row }">
          <template v-if="row.edit">
            <el-input v-model="row.title" style="width: 80px;" />
            <el-button
              class="cancel-btn"
              type="warning"
              style="padding: 9px 2px;"
              @click="cancelEdit(row)"
            >
              取消
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审计标志" prop="">
        <el-switch
          v-model="value"
          active-value="true"
          inactive-value="false"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-table-column>
      <el-table-column label="采集策略（个）" prop="author"></el-table-column>
      <el-table-column label="物理连接" prop="author"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="{ row }">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            @click="confirmEdit(row)"
          >
            保存
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  name: "InlineEditTable",
  data() {
    return {
      value: true,
      list: null,
      listLoading: true,
      elementLoadingText: "正在加载...",
      queryForm: {
        // skip: 0,
        // limit: 100,
        title: "",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      const { data } = await getList(this.queryForm);
      console.log(data);

      this.list = data.map((v) => {
        this.$set(v, "edit", false);
        v.originalTitle = v.title;
        return v;
      });
      this.listLoading = false;
    },
    cancelEdit(row) {
      row.title = row.originalTitle;
      row.edit = false;
    },
    confirmEdit(row) {
      row.edit = false;
      row.originalTitle = row.title;
    },
  },
};
</script>
