package com.weex.app.extend;

import android.media.AudioManager;
import android.media.MediaPlayer;

import com.taobao.weex.appfram.storage.IWXStorageAdapter;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;


public class StorageModuleAdapter implements IWXStorageAdapter {

    private final MediaPlayer mp;

    public StorageModuleAdapter() {
        mp = new MediaPlayer();
    }
    @Override
    public void setItem(String key, String value, OnResultReceivedListener listener) {
        try {
            mp.reset();
            JSONObject valueJson = new JSONObject(value);
            mp.setAudioStreamType(AudioManager.STREAM_MUSIC);
            mp.setDataSource("http://dl.stream.qqmusic.qq.com/C4000005XHLQ1cmTl6.m4a?vkey=B7700161F969F4F81C5E0D7254E75CC3D47AF71DDB52DE02245FF2735A6C5CBC4FF239FF5922D70B3A99AA93DA698F6A33E7F4DC71E2D601&guid=5120046175&uin=1748066164&fromtag=66");
            //mp.setDataSource(valueJson.getString("src"));
            mp.prepare();
            mp.start();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void getItem(String key, OnResultReceivedListener listener) {

    }

    @Override
    public void removeItem(String key, OnResultReceivedListener listener) {

    }

    @Override
    public void length(OnResultReceivedListener listener) {

    }

    @Override
    public void getAllKeys(OnResultReceivedListener listener) {

    }

    @Override
    public void setItemPersistent(String key, String value, OnResultReceivedListener listener) {

    }

    @Override
    public void close() {

    }
}
