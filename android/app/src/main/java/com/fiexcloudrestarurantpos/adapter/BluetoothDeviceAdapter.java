package com.finexcloudrestarurantpos.adapter;

import android.Manifest;
import android.bluetooth.BluetoothDevice;
import android.content.Context;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;


import androidx.core.app.ActivityCompat;

import com.finexcloudrestarurantpos.R;

import java.util.List;

/**
 * Created by Administrator on 2015/6/9.
 */
public class BluetoothDeviceAdapter extends BaseAdapter {

    private Context mContext;
    private List<BluetoothDevice> mList;
    private LayoutInflater mInflater;

    public BluetoothDeviceAdapter(Context context, List<BluetoothDevice> list) {
        this.mContext = context;
        this.mList = list;
        mInflater = LayoutInflater.from(mContext);
    }

    @Override
    public int getCount() {
        return mList.size();
    }

    @Override
    public Object getItem(int position) {
        return mList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    private class ViewHolder {
        TextView tvName;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        if (convertView == null) {
            convertView = mInflater.inflate(R.layout.bluetooth_device_item, null);
            holder = new ViewHolder();
            holder.tvName = (TextView) convertView.findViewById(R.id.tv_bluetooth_device_name);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        BluetoothDevice bluetoothDevice = mList.get(position);
        if (ActivityCompat.checkSelfPermission(mContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.

        }
        if (TextUtils.isEmpty(bluetoothDevice.getName())) {
            holder.tvName.setText(bluetoothDevice.getAddress());
        } else {
            holder.tvName.setText(mList.get(position).getName() + " [" + bluetoothDevice.getAddress() + "]");
        }
        return convertView;
    }
}
