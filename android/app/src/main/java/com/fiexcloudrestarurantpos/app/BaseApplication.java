package com.finexcloudrestarurantpos.app;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;

import com.finexcloudrestarurantpos.R;
import com.finexcloudrestarurantpos.utils.BaseEnum;
import com.rt.printerlibrary.printer.RTPrinter;

import static com.finexcloudrestarurantpos.activity.LabelSettingActivity.SP_KEY_LABEL_SIZE;

/**
 * Created by Tony on 2017/12/1.
 */

public class BaseApplication extends Application {

    public static BaseApplication instance = null;
    private RTPrinter rtPrinter;

    @BaseEnum.CmdType
    private int currentCmdType = BaseEnum.CMD_PIN;//默认为针打

    @BaseEnum.ConnectType
    private int currentConnectType = BaseEnum.NONE;//默认未连接

    public static final String SP_NAME_SETTING = "setting";

    public static String labelSizeStr = "80*40", labelWidth="60", labelHeight="40", labelSpeed="2", labelType="CPCL", labelOffset="0";

    @Override
    public void onCreate() {
        super.onCreate();
        SharedPreferences sp = getSharedPreferences(BaseApplication.SP_NAME_SETTING, Context.MODE_PRIVATE);
        String labelSize = sp.getString(SP_KEY_LABEL_SIZE, getResources().getStringArray(R.array.label_setting_size)[0]);
        String[] temp = labelSize.split("\\*");
        labelWidth = temp[0];
        labelHeight = temp[1];
        instance = this;
    }

    public static BaseApplication getInstance() {
        return instance;
    }


    public RTPrinter getRtPrinter() {
        return rtPrinter;
    }

    public void setRtPrinter(RTPrinter rtPrinter) {
        this.rtPrinter = rtPrinter;
    }

    @BaseEnum.CmdType
    public int getCurrentCmdType() {
        return currentCmdType;
    }

    public void setCurrentCmdType(@BaseEnum.CmdType int currentCmdType) {
        this.currentCmdType = currentCmdType;
    }

    @BaseEnum.ConnectType
    public int getCurrentConnectType() {
        return currentConnectType;
    }

    public void setCurrentConnectType(@BaseEnum.ConnectType int currentConnectType) {
        this.currentConnectType = currentConnectType;
    }
}
