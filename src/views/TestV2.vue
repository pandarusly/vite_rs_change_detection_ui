<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold mb-6">上传遥感影像</h1>

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="url">
          影像文件:
        </label>
        <input type="file" id="image" ref="fileInput" @change="handleFileInputChange" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">
          Year:
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="year"
               type="text" >
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">
          Month:
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="month"
               type="text" >
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          提交
        </button>
      </div>

      <div v-if="showProgress">
        <h2>上传进度：{{uploadProgress}}%</h2>
        <progress max="100" :value="uploadProgress"></progress>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'ImageUpload',
  setup() {
    const selectedFile = ref(null);
    const month = ref("11");
    const year = ref("2020");
    const showProgress= ref(false); 
    const uploadProgress= ref(0);
    

    const handleFileInputChange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        const reader = new FileReader();
        reader.onload = () => { 
          console.log("onload file ")
        };
        reader.readAsDataURL(file);
      }
    };

    const submitForm = () => {
      showProgress.value = true; // 显示进度条 
      const formData = new FormData();
      formData.append('image', selectedFile.value);
      formData.append('year', year.value);
      formData.append('month', month.value);

      axios.post('http://localhost:5000/uploadv2', formData, {
      // axios.post('http://localhost:5000/upload_test', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
            // 实时更新上传进度条
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            if (progress < 100) {
              uploadProgress.value = progress;
            } else {
              showProgress.value = false; // 上传完成隐藏进度条
            }
          }
      }).then(response => {        
        console.log(response.data);
        alert('上传成功！');
      }).catch(error => {
        console.log(error.response.data);
        alert('上传失败！');
        showProgress.value = false; // 上传完成隐藏进度条
      });
    };

    return {
      selectedFile,
      month,
      year,
      handleFileInputChange,
      submitForm,
      showProgress,
      uploadProgress
    };
  }
};
</script>


 