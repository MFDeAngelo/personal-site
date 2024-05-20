<template>
  <h3 class="section-title">Formal Education</h3>
  <div class="flex">
    <img src="@/assets/Utah_State_University_seal.svg" alt="The Utah State University Seal" />
    <div>
      <h4>Utah State University</h4>
      <div class="flex">
        <div>
          <h5>Degree</h5>
          <ul>
            <li>Bachelor of Science </li>
            <li>Mathematics</li>
            <li>Computer Science</li>
          </ul>
        </div>
        <div>
          <h5>Achievements</h5>
          <ul>
            <li>Honors Graduate</li>
            <li>3.89 GPA </li>
            <li>Magna Cum Laude</li>
          </ul>
        </div>
      </div>
      <p class="date"> Sept 2016 - May 2020</p>
    </div>
  </div>

  <h3 class="section-title">Certifications</h3>
  <div class="center-wrap">
    <CertificateCard v-for="cert in certificates" :key=cert.name :certificate=cert />
  </div>

  <div id="books">
    <h3 class="section-title">Books</h3>
    <div class="center-wrap">
      <div class="book" v-for="book in books" :key=book.title>
        <img :src=book.image :alt=book.title />
      </div>
    </div>
  </div>
</template>

<script setup>
import certificates from '@/data/certificates';
import books from '@/data/books';

import CertificateCard from '@/components/education/CertificateCard.vue';
</script>

<style scoped>
.center-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.book {
  width: 200px;
  height: 300px;
}

.book img {
  width: 100%;
  height: 100%;
}

/*
.section-title {
  background-color: var(--primary-color);
  text-align: center;
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
}
*/

.section-title {
  border-radius: 15px;
  background-color: var(--primary-color);
  text-align: center;
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
}

.flex {
  display: flex;
}
</style>
