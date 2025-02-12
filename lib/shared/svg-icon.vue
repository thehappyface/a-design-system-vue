<template>
    <svg ref="svgContainer"></svg>
  </template>
  
  <script lang="ts">
  export default {
    name: 'SvgIcon',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
    watch: {
      url: {
        handler(newUrl, oldUrl) {
          if (newUrl !== oldUrl) {
            this.loadSvg();
          }
        },
        immediate: true,
      },
    },
    mounted() {
      this.loadSvg();
    },
    methods: {
      loadSvg() {
        const svgUrl = this.url;
  
        fetch(svgUrl)
          .then(response => response.text())
          .then(svgContent => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
            const svgElement = svgDoc.documentElement;
  
            svgElement.removeAttribute('width');
            svgElement.removeAttribute('height');
  
            const svgContainer = (this.$refs.svgContainer as HTMLElement);
  
            // Clear existing content in the SVG container
            svgContainer.innerHTML = '';
  
            // Copy attributes from the fetched SVG to the SVG container
            Array.from(svgElement.attributes).forEach(attr => {
              svgContainer.setAttribute(attr.name, attr.value);
            });
  
            // Append the child nodes from the fetched SVG to the SVG container
            Array.from(svgElement.childNodes).forEach(childNode => {
              svgContainer.appendChild(childNode);
            });
          })
          .catch(error => {
            console.error('Error loading SVG:', error);
          });
      },
    },
  };
  </script>
  