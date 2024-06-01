<template>
  <div style="justify-content: center;">
    <h3 class="section-title">Formal Education</h3>
    <div class="center-wrap">
      <Card img="education/Utah_State_University_seal.svg">
        <div>
          <h4 class="center">Utah State University</h4>
          <div class="flex">
            <div>
              <ul>
                <li>Bachelor of Science </li>
                <li>Mathematics</li>
                <li>Computer Science</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Honors Graduate</li>
                <li>3.89 GPA </li>
                <li>Magna Cum Laude</li>
              </ul>
            </div>
          </div>
          <p class="center date"> Sept 2016 - May 2020</p>
        </div>
      </Card>
    </div>

    <h3 class="section-title">Certifications</h3>
    <div class="center-wrap">
      <CertificateCard v-for="cert in certificates" :key=cert.name :certificate=cert />
    </div>

    <div id="books">
      <h3 class="section-title">Books Read</h3>
      <div class="center-wrap">
        <Book v-for="book in books" :key=book.title :book=book> </Book>
      </div>
    </div>
  </div>
</template>

<script setup>
import certificates from '@/data/certificates';
import books from '@/data/books';

import CertificateCard from '@/components/education/CertificateCard.vue';
import Card from '@/components/education/Card.vue';
import Book from '@/components/education/Book.vue';
</script>

<style scoped>
.center-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.section-title {
  border-radius: 15px;
  background-color: var(--primary-color);
  text-align: center;
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.flex {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
