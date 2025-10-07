<template>
  <el-table :data="tableData">
    <el-table-column align="center">
      <template #header>
        <span v-html="renderColumnMap(tableHeaderRow, 'label_1')" />
      </template>
      <template #default="scope">
        <span v-html="renderColumnMap(scope.row, 'col_1')" />
      </template>
    </el-table-column>
    <el-table-column align="center">
      <template #header>
        <span v-html="renderColumnMap(tableHeaderRow, 'label_2')" />
      </template>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_4')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_2')" />
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_5')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_3')" />
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_6')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_4')" />
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center">
      <template #header>
        <span v-html="renderColumnMap(tableHeaderRow, 'label_3')" />
      </template>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_7')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_5')" />
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_8')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_6')" />
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_9')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_7')" />
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
<script setup lang="ts">
import { renderMarkup } from '~/utils'

const tableHeaderRow = {
  label_1: '$\\boldsymbol{y=x^\\alpha}$',
  label_2: 'Test2',
  label_3: 'Test3',
  label_4: 'Test4',
  label_5: 'Test5',
  label_6: 'Test6',
  label_7: 'Test7',
  label_8: 'Test8',
  label_9: 'Test9'
}

const tableData = [
  {
    col_1: {
      type: 'text',
      content: 'Test1'
    },
    col_2: {
      type: 'text',
      content: 'Test2'
    },
    col_3: {
      type: 'text',
      content: 'Test3'
    },
    col_4: {
      type: 'text',
      content: 'Test4'
    },
    col_5: {
      type: 'text',
      content: 'Test5<p>123</p>'
    },
    col_6: {
      type: 'text',
      content: 'Test6'
    },
    col_7: {
      type: 'text',
      content: 'Test7'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Test1'
    },
    col_2: {
      type: 'text',
      content: 'Test2'
    },
    col_3: {
      type: 'text',
      content: 'Test3'
    },
    col_4: {
      type: 'text',
      content: 'Test4'
    },
    col_5: {
      type: 'text',
      content: 'Test5<p>123</p>'
    },
    col_6: {
      type: 'text',
      content: 'Test6'
    },
    col_7: {
      type: 'text',
      content: 'Test7'
    }
  }
]

function renderColumnMap(row: any, prop: string): string {
  const record = row[prop]
  switch (record.type) {
  case 'image':
    return `<img src="${record.content}" alt=""/>`
  default:
    return renderMarkup((typeof record === "string" ? record : record.content) || '')
  }
}
</script>
