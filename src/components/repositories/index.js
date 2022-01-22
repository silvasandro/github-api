import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="beautysalon"
          linkToRepo="https://github.com/silvasandro/beautysalon"
          fullName="silvasandro/beautysalon"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="CodigoSemBarreiras"
          linkToRepo="https://github.com/silvasandro/CodigoSemBarreiras"
          fullName="silvasandro/CodigoSemBarreiras"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
