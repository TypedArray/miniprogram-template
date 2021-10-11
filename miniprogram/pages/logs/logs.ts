import { format } from 'date-fns';

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: format(new Date(log), 'yyyy-MM-dd HH:mm:ss'),
          timeStamp: log,
        };
      }),
    });
  },
});
