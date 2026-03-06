<template>
  <el-table :data="tableData">
    <el-table-column align="center" min-width="90">
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
      <el-table-column align="center" min-width="100">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_4')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_2')" />
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="100">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_5')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_3')" />
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="100">
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
      <el-table-column align="center" min-width="100">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_7')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_5')" />
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="100">
        <template #header>
          <span v-html="renderColumnMap(tableHeaderRow, 'label_8')" />
        </template>
        <template #default="scope">
          <span v-html="renderColumnMap(scope.row, 'col_6')" />
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="100">
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
  label_2: '$\\alpha=\\frac{m}{n}$, $m,n\\in\\mathbb{N_+}$, $m,n$ are coprime',
  label_3: '$\\alpha=-\\frac{m}{n}$, $m,n\\in\\mathbb{N_+}$, $m,n$ are coprime',
  label_4: '$m$ is odd,<br/>$n$ is odd',
  label_5: '$m$ is even,<br/>$n$ is odd',
  label_6: '$m$ is odd,<br/>$n$ is even',
  label_7: '$m$ is odd,<br/>$n$ is odd',
  label_8: '$m$ is even,<br/>$n$ is odd',
  label_9: '$m$ is odd,<br/>$n$ is even'
}

const tableData = [
  {
    col_1: {
      type: 'text',
      content: 'Functions'
    },
    col_2: {
      type: 'text',
      content: '$y=x$, $y=x^3$, $y=x^\\frac{1}{3}$'
    },
    col_3: {
      type: 'text',
      content: '$y=x^2$, $y=x^\\frac{2}{3}$'
    },
    col_4: {
      type: 'text',
      content: '$y=x^\\frac{1}{2}$'
    },
    col_5: {
      type: 'text',
      content: '$y=x^{-1}$, $y=\\frac{1}{x}$'
    },
    col_6: {
      type: 'text',
      content: '$y=x^{-2}$'
    },
    col_7: {
      type: 'text',
      content: '$y=x^{-\\frac{1}{2}}$'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Graph'
    },
    col_2: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20positive%20graph%201.svg'
    },
    col_3: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20positive%20graph%202.svg'
    },
    col_4: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20positive%20graph%203.svg'
    },
    col_5: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20negative%20graph%201.svg'
    },
    col_6: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20negative%20graph%202.svg'
    },
    col_7: {
      type: 'image',
      content: '/math/core%20course/Power%20functions%20negative%20graph%203.svg'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Domains'
    },
    col_2: {
      type: 'text',
      content: '$\\mathbb{R}$'
    },
    col_3: {
      type: 'text',
      content: '$\\mathbb{R}$'
    },
    col_4: {
      type: 'text',
      content: '$[0, +\\infty)$'
    },
    col_5: {
      type: 'text',
      content: '$(-\\infty, 0)\\;\\cup$<br/>$(0, +\\infty)\\hspace{0.5cm}$'
    },
    col_6: {
      type: 'text',
      content: '$(-\\infty, 0)\\;\\cup$<br/>$(0, +\\infty)\\hspace{0.5cm}$'
    },
    col_7: {
      type: 'text',
      content: '$(0, +\\infty)$'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Parity'
    },
    col_2: {
      type: 'text',
      content: 'Odd function'
    },
    col_3: {
      type: 'text',
      content: 'Even function'
    },
    col_4: {
      type: 'text',
      content: 'Neither odd nor even'
    },
    col_5: {
      type: 'text',
      content: 'Odd function'
    },
    col_6: {
      type: 'text',
      content: 'Even function'
    },
    col_7: {
      type: 'text',
      content: 'Neither odd nor even'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Monotonicity'
    },
    col_2: {
      type: 'text',
      content: 'Increasing on $\\mathbb{R}$'
    },
    col_3: {
      type: 'text',
      content: 'Decreasing on $(-\\infty, 0]$,<br/>increasing on $[0, +\\infty)$'
    },
    col_4: {
      type: 'text',
      content: 'Increasing on $[0, +\\infty)$'
    },
    col_5: {
      type: 'text',
      content: 'Decreasing on $(-\\infty, 0)$,<br/>decreasing on $(0, +\\infty)$'
    },
    col_6: {
      type: 'text',
      content: 'Increasing on $(-\\infty, 0)$,<br/>decreasing on $(0, +\\infty)$'
    },
    col_7: {
      type: 'text',
      content: 'Decreasing on $(0, +\\infty)$'
    }
  },
  {
    col_1: {
      type: 'text',
      content: 'Ranges'
    },
    col_2: {
      type: 'text',
      content: '$\\mathbb{R}$'
    },
    col_3: {
      type: 'text',
      content: '$[0, +\\infty)$'
    },
    col_4: {
      type: 'text',
      content: '$[0, +\\infty)$'
    },
    col_5: {
      type: 'text',
      content: '$(-\\infty, 0)\\;\\cup$<br/>$(0, +\\infty)\\hspace{0.5cm}$'
    },
    col_6: {
      type: 'text',
      content: '$(0, +\\infty)$'
    },
    col_7: {
      type: 'text',
      content: '$(0, +\\infty)$'
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
