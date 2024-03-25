const App = {
    data() {
        return {
            title: 'Notes app',
            input: {
                value: '',
                placeholder: 'Текст'
            },

            editIndex: null,
            editValue: '',
            notes: []
        }
    },
    mounted() {
        this.localNotes = localStorage.getItem('notes');
        if (this.localNotes) {
            this.notes = JSON.parse(this.localNotes);
        }
    },
    methods: {
        onSubmit() {
            this.notes.push(this.input.value);
            localStorage.setItem('notes', JSON.stringify(this.notes));
            this.input.value = '';
        },
        remove(index) {
            this.notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(this.notes));
        },
        edit(){
            this.notes[this.editIndex] = this.editValue
            this.editValue = ''
            this.editIndex = null
            localStorage.setItem('notes', JSON.stringify(this.notes));

        }
    }
}

Vue.createApp(App).mount('#app');
