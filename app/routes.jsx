import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { BaseLayoutContainer, MemberLayoutContainer, MemberIndexContainer
  , MemberAccountListContainer, MemberAccountCreateContainer, MemberAccountCreateSuccessContainer
  , CampaignLayoutContainer, CampaignContainer } from './containers';
import { IndexView, AboutView, NotFoundView } from './views';

export default (
  <Route>
    <Route path="/" component={ BaseLayoutContainer }>
      <IndexRoute component={ IndexView } />
      <Route path="/about" component={ AboutView } />
      <Route path="/member" component={ MemberLayoutContainer }>
        <IndexRoute component={ MemberIndexContainer } />
        <Route path="/member/account/list" component={ MemberAccountListContainer } />
        <Route path="/member/account/create" component={ MemberAccountCreateContainer } />
        <Route path="/member/account/createsuccess" component={ MemberAccountCreateSuccessContainer } />
      </Route>
    </Route>
    {/* 這邊要修改成dynamic require(webpack有support) 需要用到的campaign page ==> CampaignContainer */}
    <Route path="/campaign" component={ CampaignLayoutContainer }>
      <Route path="/campaign/:campaignId" component={ CampaignContainer } />
    </Route>
    <Route path="*" status={ 404 } component={ NotFoundView } />
  </Route>
);
