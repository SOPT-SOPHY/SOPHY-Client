import React from 'react';
import AuthorRegion from '../../../components/author/AuthorRegion';
import AuthorLayout from '../../../components/author/@AuthorLayout';

const index = () => {
  return (
    <AuthorLayout pageNum="1" title="지역을 선택해주세요">
      <AuthorRegion />
    </AuthorLayout>
  );
};

export default index;
