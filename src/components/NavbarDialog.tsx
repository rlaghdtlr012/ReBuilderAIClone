import { useState } from 'react';
import { ClickAwayListener } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NavbarDialog = () => {
  const [opens, setOpens] = useState(false);

  // 셋팅 다이얼로그 닫기
  const sideSettingDialogClose = () => {
    setOpens((prev) => !prev);
  };
  // 다이얼로그 바깥 클릭, 다이얼로그 닫기
  const handleClickAway = () => {
    setOpens(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="ldSettingDialog">
        <Button className="ldSettingDialog" onClick={sideSettingDialogClose}>
          {opens ? (
            <CloseIcon onClick={handleClickAway} />
          ) : (
            <MenuIcon fontSize="large" color="inherit" />
          )}
        </Button>

        <div className={`ldSettingDialog`}>
          {opens ? (
            <div className={`ldSettingDialog`}>
              {/* <AdminNavbarLinks
                sideSettingDialogClose={sideSettingDialogClose}
              /> */}
            </div>
          ) : null}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default NavbarDialog;
