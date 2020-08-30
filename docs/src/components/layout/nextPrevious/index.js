import React from 'react';
import Link from '../link';
import {ArrowLeft, ArrowRight} from 'react-feather';
import { StyledNextPrevious } from '../../styles/PageNavigationButtons';

const NextPrevious = ({ mdx, nav }) => {
  let currentIndex;

  const currentPaginationInfo = nav.map((el, index) => {
    if (el && el.url === mdx.fields.slug) {
      currentIndex = index;
    }
  });

  const nextInfo = {};

  const previousInfo = {};

  if (currentIndex === undefined) {
    // index
    if (nav[0]) {
      nextInfo.url = nav[0].url;
      nextInfo.title = nav[0].title;
    }
    previousInfo.url = null;
    previousInfo.title = null;
    currentIndex = -1;
  } else if (currentIndex === 0) {
    // first page
    nextInfo.url = nav[currentIndex + 1] ? nav[currentIndex + 1].url : null;
    nextInfo.title = nav[currentIndex + 1] ? nav[currentIndex + 1].title : null;
    previousInfo.url = null;
    previousInfo.title = null;
  } else if (currentIndex === nav.length - 1) {
    // last page
    nextInfo.url = null;
    nextInfo.title = null;
    previousInfo.url = nav[currentIndex - 1] ? nav[currentIndex - 1].url : null;
    previousInfo.title = nav[currentIndex - 1] ? nav[currentIndex - 1].title : null;
  } else if (currentIndex) {
    // any other page
    nextInfo.url = nav[currentIndex + 1].url;
    nextInfo.title = nav[currentIndex + 1].title;
    if (nav[currentIndex - 1]) {
      previousInfo.url = nav[currentIndex - 1].url;
      previousInfo.title = nav[currentIndex - 1].title;
    }
  }

  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-6 pl-0">
        {previousInfo.url && currentIndex >= 0 ? (
          <Link to={nav[currentIndex - 1].url} className="d-flex align-items-center justify-content-between border rounded text-decoration-none py-3 px-4">
            <div className={'leftArrow'}>
              <ArrowLeft />
            </div>
            <div className="text-right">
              <p className="text-capitalize">
                Previous
              </p>
              <div className="">
                <span>{nav[currentIndex - 1].title}</span>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
      <div className="col-6 pr-0">
        {nextInfo.url && currentIndex >= 0 ? (
          <Link to={nav[currentIndex + 1].url} className="d-flex align-items-center justify-content-between border rounded text-decoration-none py-3 px-4">
            <div className="text-left">
              <p className="text-capitalize">
                Next
              </p>
              <div className="">
                <span>{nav[currentIndex + 1] && nav[currentIndex + 1].title}</span>
              </div>
            </div>
            <div className={'rightArrow'}>
              <ArrowRight />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NextPrevious;
