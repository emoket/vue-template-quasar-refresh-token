<script>
import fromCDN from 'from-cdn';
import { dataset } from './pivot-data';

export default {
  name: 'PivotFooterCdn',
  data: () => ({
    pivot: null,
    isEmpty: true,
    fields: {
      rows: ['form', 'name'],
      columns: ['year'],
      values: [
        { id: 'oil', method: 'count' },
        { id: 'oil', method: 'sum' },
      ],
    },
    fieldList: [
      { id: 'name', label: 'Name' },
      { id: 'year', label: 'Year' },
      { id: 'continent', label: 'Continent' },
      { id: 'form', label: 'Form' },
      { id: 'gdp', label: 'GDP' },
      { id: 'oil', label: 'Oil' },
      { id: 'balance', label: 'Balance' },
      { id: 'when', label: 'When', type: 'date', format: '%d/%m/%Y' },
    ],
    layout: {
      liveReload: false,
    },
    events: [],
  }),
  mounted() {
    fromCDN([
      'https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js',
      'https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css',
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        data: dataset,
        fields: this.fields,
        fieldList: this.fieldList,
        layout: this.layout,
      });

      this.pivot.events.on('fieldClick', (e, id, type) => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [
          {
            keyId,
            name: 'fieldClick',
            value: `${JSON.stringify(e)}, ${id}, ${type}`,
          },
        ].concat(this.events);
      });
      this.pivot.events.on('applyButtonClick', () => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: 'applyButtonClick', value: '' }].concat(
          this.events,
        );
      });
      this.pivot.events.on('change', () => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: 'change', value: '' }].concat(
          this.events,
        );
      });
      this.pivot.events.on('filterApply', (field, settings) => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [
          {
            keyId,
            name: 'filterApply',
            value: `${field}, ${JSON.stringify(settings)}`,
          },
        ].concat(this.events);
      });
    });
  },
  methods: {
    clearAll() {
      this.isEmpty = true;
      this.events.length = 0;
    },
  },
  beforeUnmount() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>

<template>
  <div class="dhx-container_inner events">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="clearAll()">
        Clear events
      </button>
    </section>
    <div class="dhx-events">
      <div class="dhx_sample-container__widget" ref="pivot"></div>
      <div class="dhx_sample-container__sidebar">
        <div class="events-list--element" v-if="isEmpty">No events yet</div>
        <div
          class="events-list--element dhx_sample-event"
          v-else
          v-for="event in events"
          :key="event.keyId"
        >
          <p>{{ event.name }}</p>
          <p>{{ event.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dhx-container {
  height: 100%;
}

.dhx-container_inner {
  height: calc(100% - 90px);
}

.dhx_sample-container__widget {
  width: 95%;
  height: 600px;
  margin: 20px auto;
}

.dhx-container_header {
  height: 90px;
  text-align: center;
  padding-top: 10px;
}

.dhx-container_header a {
  cursor: pointer;
  text-decoration: none;
  color: #0288d1;
  margin-bottom: 15px;
}

.dhx-container_header a:hover {
  cursor: pointer;
  text-decoration: underline;
}

.dhx-container_header h3 {
  color: rgba(0, 0, 0, 0.7);
}

.dhx_sample-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  height: 60px;
  font-family: Roboto, Arial, Tahoma, Verdana, sans-serif;
  font-size: 14px;
}

.dhx_sample-controls button:not(:last-child),
.dhx_sample-controls input:not(:last-child),
.dhx_sample-controls select:not(:last-child) {
  margin-right: 12px;
}

.dhx_sample-btn--flat {
  background: #0288d1;
  color: #fff;
  border: none;
  outline: none;
  padding: 6px 16px;
  border-radius: 2px;
  font-family: Roboto, Arial, Tahoma, Verdana, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
}

.dhx_sample-btn--flat:hover {
  cursor: pointer;
  opacity: 0.8;
}

/* for export */

.dhx-container_inner.export {
  width: 70%;
  margin: 0 auto;
}

.max_cell {
  background: #ff5722;
  color: #fff;
}

.min_cell {
  background: #e3fa15;
  color: #fff;
}

/* for structure reload */

.dhx-container_inner.structure_reload {
  width: 70%;
  margin: 0 auto;
}

/* for custom mark */

.dhx_sample-container__widget.custom_mark {
  width: 70%;
}

.mark {
  background: #757575;
  color: #fff;
}

.customMaxCell {
  background: #ffd6d6;
}

.biggestMaxCell {
  background: #fa9595;
}

.dhx_sample-header__content {
  max-width: 450px;
}

/* for events */
.dhx-events {
  display: flex;
  width: 95%;
  margin: 0 auto;
}

.dhx_sample-container__sidebar {
  width: 20%;
  margin: 20px 0 0 20px;
  border: 1px solid #dfdfdf;
  padding: 10px;
  height: 600px;
  font-family: Roboto, Arial, Tahoma, Verdana, sans-serif;
  font-size: 14px;
  line-height: 1.3;
  overflow-y: auto;
}

.events-list--element {
  margin-bottom: 8px;
  margin-top: 0;
  padding: 8px;
  -webkit-animation: fadeIn 0.8s;
  animation: fadeIn 0.8s;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  background: #f2f2f2;
  word-wrap: break-word;
}
</style>
