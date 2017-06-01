/* eslint-disable import/prefer-default-export */

import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from '../constants';

import fetch from '../core/fetch';

export function getUsers() {
  return async (dispatch, getState) => {
    dispatch({
      type: LOAD_USERS_START,
      payload: {
        started: true,
      },
    });
    try {
      const resp = await fetch('/api/users/getall', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{users/getall}',
        }),
        credentials: 'include',
      });

      const { data } = await resp.json();
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: {
          started: false,
          data: data,
        },
      });
    } catch (error) {
      dispatch({
        type: LOAD_USERS_ERROR,
        payload: {
          started: false,
          error,
        },
      });
      return false;
    }
    return true;
  };
}
