import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import UploadIcon from '@mui/icons-material/Upload';

export const sidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "メール",
    icon: <EmailIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AnalyticsIcon />,
    link: "/analytics",
  },
  {
    title: "友達追加",
    icon: <GroupAddIcon />,
    link: "/friends",
  },
  {
    title: "お支払い設定",
    icon: <PaymentIcon />,
    link: "/payment",
  },
  {
    title: "アップロード",
    icon: <UploadIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/rocket",
  },
];
