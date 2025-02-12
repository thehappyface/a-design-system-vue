import type { Meta, StoryObj } from '@storybook/vue3';
import AdModal from './modal.vue';
import { ref } from 'vue';

// CONFIGURATION
const meta = {
  title: 'components/Modal',
  component: AdModal,
} satisfies Meta<typeof AdModal>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Desktop: Story = {
    render: (args) => ({
        components: { AdModal },
        setup() {
            const modalIsOpen = ref(false);
            return { modalIsOpen, args };
        },
        template: `
          <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
          <AdModal 
            v-if="modalIsOpen"
            @isClosing="modalIsOpen = value"
            :heading="args.heading"
            :stickyHeader="args.stickyHeader"
            :stickyFooter="args.stickyFooter"
            :desktopPadding="args.desktopPadding">
            <template #default>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            </template>
            <template #footer>
                <div style="display: flex;justify-content: space-between;width: 100%;">
                    <button @click="modalIsOpen = !modalIsOpen">Close</button>
                    <button @click="modalIsOpen = !modalIsOpen">My action</button>
                </div>
            </template>
          </AdModal>
        `,
      }),
      args: {
        heading: "My modal heading", // Default args
        stickyHeader: true,
        stickyFooter: true,
        desktopPadding: "0 48px"
      },
    };
export const Mobile: Story = {
render: (args) => ({
    components: { AdModal },
    setup() {
        const modalIsOpen = ref(false);
        return { modalIsOpen, args };
    },
    template: `
      <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
      <AdModal 
        v-if="modalIsOpen"
        @isClosing="modalIsOpen = value"
        :heading="args.heading"
        :stickyHeader="args.stickyHeader"
        :stickyFooter="args.stickyFooter"
        :desktopPadding="args.desktopPadding">
        <template #default>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
        </template>
        <template #footer>
            <div style="display: flex;justify-content: space-between;width: 100%;">
                <button @click="modalIsOpen = !modalIsOpen">Close</button>
                <button @click="modalIsOpen = !modalIsOpen">My action</button>
            </div>
        </template>
      </AdModal>
    `,
  }),
  args: {
    heading: "My modal heading", // Default args
    stickyHeader: true,
    stickyFooter: true,
    desktopPadding: "0 48px"
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2', // Uses Storybook's built-in mobile viewport
    },
  },
};