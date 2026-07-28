/* @ds-bundle: {"format":4,"namespace":"TheWaveDesignSystem_664d29","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"ConfirmDialog","sourcePath":"components/core/ConfirmDialog.jsx"},{"name":"EmptyState","sourcePath":"components/core/EmptyState.jsx"},{"name":"GameStat","sourcePath":"components/core/GameStat.jsx"},{"name":"Hero","sourcePath":"components/core/Hero.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"LevelBadge","sourcePath":"components/core/LevelBadge.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"NavItem","sourcePath":"components/core/NavItem.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"SprintProjectRow","sourcePath":"components/core/SprintProjectRow.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"StreakPill","sourcePath":"components/core/StreakPill.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"WeekButton","sourcePath":"components/core/WeekButton.jsx"},{"name":"ChipSelect","sourcePath":"components/forms/ChipSelect.jsx"},{"name":"ColorSwatchPicker","sourcePath":"components/forms/ColorSwatchPicker.jsx"},{"name":"DateField","sourcePath":"components/forms/DateField.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"NumberField","sourcePath":"components/forms/NumberField.jsx"},{"name":"PasswordInput","sourcePath":"components/forms/PasswordInput.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"009a69559c2f","components/core/Badge.jsx":"acf63659a6e4","components/core/Button.jsx":"c8b2f52626ef","components/core/Card.jsx":"ae2407ab0585","components/core/Checkbox.jsx":"1053641a9391","components/core/Chip.jsx":"7318a1cc9360","components/core/ConfirmDialog.jsx":"ac953e366824","components/core/EmptyState.jsx":"80132c0ba1ee","components/core/GameStat.jsx":"4c6092aa92df","components/core/Hero.jsx":"bf998b9bfcca","components/core/IconButton.jsx":"3420aee2cd52","components/core/Input.jsx":"4e976044851f","components/core/LevelBadge.jsx":"b9f7fef0021a","components/core/Modal.jsx":"200ea807ee62","components/core/NavItem.jsx":"6a80b0dcc817","components/core/ProgressBar.jsx":"1afd8cd2db31","components/core/SegmentedControl.jsx":"3f6779192b38","components/core/Select.jsx":"417dfa975a91","components/core/Spinner.jsx":"56fe69d6620b","components/core/SprintProjectRow.jsx":"86a11d86f988","components/core/StatTile.jsx":"72beaf98c3f5","components/core/StreakPill.jsx":"1401fd90e0a8","components/core/Tabs.jsx":"cf9ac17370b7","components/core/Textarea.jsx":"9e89f63f9d1d","components/core/Toast.jsx":"0898f4e1b5fe","components/core/WeekButton.jsx":"b26455cb43e1","components/forms/ChipSelect.jsx":"7a99e5a89efb","components/forms/ColorSwatchPicker.jsx":"6384582799a5","components/forms/DateField.jsx":"0554430f37e7","components/forms/FormField.jsx":"88396449d0f7","components/forms/NumberField.jsx":"535cff3a15c7","components/forms/PasswordInput.jsx":"1fb128604dd5","components/forms/RadioGroup.jsx":"120bbb15583d","components/forms/SearchInput.jsx":"57be44ff49f2","components/forms/Switch.jsx":"2efe58651ce6","ui_kits/storypoints/Screens.jsx":"396197e423fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheWaveDesignSystem_664d29 = window.TheWaveDesignSystem_664d29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * The Wave — Avatar
 * Circular avatar. Renders an image if `src` is given, otherwise a
 * solid brand-color disc with initials. `ring` adds the product's
 * signature panel+blue double ring.
 */
function Avatar({
  src,
  initials,
  color = 'var(--yellow)',
  size = 38,
  ring = false,
  title,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    title: title,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: '0 0 auto',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : color,
      color: 'var(--black)',
      fontWeight: 700,
      fontSize: size * 0.4,
      boxShadow: ring ? 'var(--shadow-avatar)' : '0 0 0 2px var(--border)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials || '');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Badge
 * A gamification achievement. Shows an emoji icon, a name, and a
 * short mono description. `locked` dims and desaturates it.
 */
function Badge({
  icon,
  name,
  desc,
  locked = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 14px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-xl)',
      background: 'var(--panel-2)',
      opacity: locked ? 0.4 : 1,
      filter: locked ? 'grayscale(1)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.7rem',
      flex: '0 0 auto',
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--cream)',
      fontSize: '.9rem'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.72rem',
      color: 'var(--muted)'
    }
  }, desc)));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Button
 * Primary (blue, lifts on hover) or ghost (mono text) action.
 * Always Space Mono, UPPERCASE, wide tracking.
 */
function Button({
  variant = 'primary',
  children,
  icon,
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--mono-md)',
    fontWeight: 700,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    borderRadius: 'var(--r-xl)',
    transition: 'transform .12s ease, background-color .15s ease, box-shadow .15s ease, color .15s ease',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      backgroundColor: hover && !disabled ? 'var(--blue-2)' : 'var(--blue)',
      color: 'var(--cream)',
      padding: '12px 17px',
      transform: disabled ? 'none' : active ? 'translateY(1px) scale(.97)' : hover ? 'translateY(-1px)' : 'none',
      boxShadow: hover && !disabled ? 'var(--shadow-btn)' : 'none'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--cream)' : 'var(--muted)',
      padding: '12px 18px',
      fontSize: '11px',
      letterSpacing: 'var(--ls-wide)',
      borderRadius: 'var(--r-lg)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Card
 * The cream "paper" surface that holds content on top of the dark
 * workspace. Rounded 22px, generous padding.
 */
function Card({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--cream)',
      borderRadius: 'var(--r-6xl)',
      padding: '20px 22px 22px',
      color: 'var(--black)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Checkbox
 * Rounded-square check used in project to-do lists. When done, fills
 * blue, shows a white tick, and strikes through the label.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  onCream = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: () => onChange && onChange(!checked),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '5px 0',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--r-xs)',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.5px solid ${checked ? 'var(--blue)' : '#c9c5b9'}`,
      background: checked ? 'var(--blue)' : 'transparent',
      transition: 'background .15s ease, border-color .15s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "var(--cream)",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: checked ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.95rem',
      lineHeight: 1.5,
      color: checked ? '#a8a59c' : onCream ? '#2a2a26' : 'var(--cream)',
      textDecoration: checked ? 'line-through' : 'none',
      transition: 'color .15s ease'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Chip
 * Small pill tag, typically tinted with a project color. Ink
 * auto-contrasts against the background.
 */
function inkFor(hex) {
  if (!hex || hex[0] !== '#') return 'var(--cream)';
  const n = parseInt(String(hex).slice(1), 16);
  const r = n >> 16,
    g = n >> 8 & 255,
    b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#323232' : '#FAF7EB';
}
function Chip({
  children,
  color = '#0057FF',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "mono",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 12px',
      borderRadius: 'var(--r-pill)',
      fontSize: '10.5px',
      fontWeight: 700,
      letterSpacing: '.06em',
      background: color,
      color: inkFor(color),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/ConfirmDialog.jsx
try { (() => {
/**
 * The Wave — ConfirmDialog
 * A compact confirmation on a dark overlay (no blue header — smaller
 * than Modal). Mirrors .confirm-* in the source. The confirm button
 * is danger-red by default.
 */
function ConfirmDialog({
  message,
  okLabel = 'Conferma',
  cancelLabel = 'Annulla',
  danger = true,
  onOk,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onCancel) onCancel();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(0,0,0,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-3xl)',
      padding: '22px',
      width: '100%',
      maxWidth: '24rem',
      boxShadow: 'var(--shadow-modal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontSize: '.98rem',
      lineHeight: 1.5,
      marginBottom: '20px'
    }
  }, message), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    style: {
      font: 'inherit',
      fontSize: '.9rem',
      padding: '9px 16px',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      border: '1px solid var(--border)',
      background: 'transparent',
      color: 'var(--muted)'
    }
  }, cancelLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOk,
    style: {
      font: 'inherit',
      fontSize: '.9rem',
      fontWeight: 700,
      padding: '9px 16px',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      border: `1px solid ${danger ? 'var(--danger-2)' : 'var(--blue)'}`,
      background: danger ? 'var(--danger-2)' : 'var(--blue)',
      color: '#fff'
    }
  }, okLabel))));
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/core/EmptyState.jsx
try { (() => {
/**
 * The Wave — EmptyState
 * Centered placeholder for empty panels: emoji icon, heavy title,
 * mono message, optional primary CTA. Designed to sit on cream cards.
 */
function EmptyState({
  icon = '📁',
  title,
  message,
  ctaLabel,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      textAlign: 'center',
      padding: '24px',
      minHeight: 160,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.6rem',
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '1.05rem',
      color: 'var(--black)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '12px',
      color: 'var(--cream-mut)',
      maxWidth: '32ch',
      lineHeight: 1.5
    }
  }, message), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onCta,
    style: {
      marginTop: '6px'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/GameStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — GameStat
 * A dark bordered card showing one gamification metric: a big heavy
 * number over a mono uppercase label. Centered.
 */
function GameStat({
  num,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-2xl)',
      padding: '14px',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.8rem',
      fontWeight: 800,
      color: 'var(--cream)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.7rem',
      color: 'var(--muted)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      marginTop: '4px'
    }
  }, label));
}
Object.assign(__ds_scope, { GameStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GameStat.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — IconButton
 * 42px square control holding a single stroke icon. Hover fills blue.
 * Pass a Lucide/Feather-style SVG (or any node) as children.
 */
function IconButton({
  children,
  active = false,
  onClick,
  title,
  size = 42,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    title: title,
    "aria-label": title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-xl)',
      border: `1px solid ${on ? 'var(--blue)' : 'var(--border)'}`,
      backgroundColor: on ? 'var(--blue)' : 'transparent',
      color: on ? 'var(--cream)' : 'var(--muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Input
 * Labelled text field. Dark fill by default; `light` for cream cards.
 * Label is Space Mono uppercase, focus ring is brand blue.
 */
function Input({
  label,
  light = false,
  style,
  wrapStyle,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "mono",
    style: {
      display: 'block',
      fontSize: '10.5px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      padding: '13px 15px',
      fontSize: '.95rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${focus ? light ? 'var(--blue)' : '#5a8bff' : light ? 'var(--cream-bd)' : 'var(--border)'}`,
      transition: 'border-color .15s ease',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/LevelBadge.jsx
try { (() => {
/**
 * The Wave — LevelBadge
 * The circular level indicator from the gamification hero: a small
 * uppercase label over a big level number, on a translucent disc.
 * Sits on the blue hero by default.
 */
function LevelBadge({
  level,
  label = 'Livello',
  size = 84,
  onBlue = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: onBlue ? 'rgba(255,255,255,.16)' : 'var(--panel-2)',
      color: 'var(--cream)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: size * 0.072,
      opacity: .8,
      fontWeight: 600,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: size * 0.19
    }
  }, level));
}
Object.assign(__ds_scope, { LevelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LevelBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/**
 * The Wave — Modal
 * Centered dialog on a blurred dark overlay. Blue header bar with a
 * heavy title and a close button; body on the dark panel surface.
 * Pass `footer` for the action row.
 */
function Modal({
  title,
  children,
  footer,
  onClose,
  maxWidth = '30rem',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--overlay-bg)',
      backdropFilter: 'var(--overlay-blur)',
      WebkitBackdropFilter: 'var(--overlay-blur)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth,
      background: 'var(--panel)',
      borderRadius: 'var(--r-4xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-modal)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 22px',
      background: 'var(--blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: 'var(--cream)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Chiudi",
    style: {
      width: 30,
      height: 30,
      border: 'none',
      borderRadius: 'var(--r-md)',
      background: 'rgba(250,247,235,.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cream)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
      marginTop: '24px'
    }
  }, footer))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — NavItem
 * Sidebar navigation row. Leading icon (emoji or SVG) + label.
 * Active state fills brand blue; hover gives a faint white wash.
 */
function NavItem({
  icon,
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '11px',
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      borderRadius: 'var(--r-lg)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: '.92rem',
      backgroundColor: active ? 'var(--blue)' : hover ? 'rgba(255,255,255,.05)' : 'transparent',
      color: active ? 'var(--cream)' : hover ? 'var(--cream)' : 'var(--muted)',
      transition: 'background-color .15s ease, color .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1,
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
/**
 * The Wave — ProgressBar
 * Pill-shaped track + fill. On the blue hero the track is translucent
 * white and the fill is cream; elsewhere the fill is brand blue.
 * `tone` overrides the fill color (e.g. a project color).
 */
function ProgressBar({
  value = 0,
  onBlue = false,
  tone,
  height = 12,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--r-pill)',
      overflow: 'hidden',
      background: onBlue ? 'rgba(255,255,255,.22)' : 'color-mix(in srgb, currentColor 18%, transparent)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--r-pill)',
      background: tone || (onBlue ? 'var(--cream)' : 'var(--blue)'),
      transition: 'width .5s cubic-bezier(.2,.8,.2,1)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Hero.jsx
try { (() => {
/**
 * The Wave — Hero
 * The signature blue panel with the giant 92px story-point counter,
 * a label, and a progress bar toward the sprint capacity.
 */
function Hero({
  name,
  range,
  done,
  total,
  pct,
  capLabel = 'Story points',
  style
}) {
  const percent = pct != null ? pct : total ? Math.round(done / total * 100) : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue)',
      borderRadius: 'var(--r-5xl)',
      padding: '26px',
      color: 'var(--cream)',
      ...style
    }
  }, (name || range) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '4px'
    }
  }, name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, name), range && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '11px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-on-blue-mut)',
      marginTop: '7px'
    }
  }, range)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10.5px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-blue-mut)',
      marginTop: name ? '24px' : 0
    }
  }, capLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      margin: '6px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '92px',
      fontWeight: 800,
      lineHeight: .85,
      letterSpacing: '-.04em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, done), total != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: '#9db8ff',
      letterSpacing: '-.02em'
    }
  }, "/ ", total)), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: percent,
    onBlue: true,
    style: {
      marginTop: '20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '9px'
    },
    className: "mono"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10.5px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-on-blue-mut)'
    }
  }, "Completato"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10.5px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--cream)',
      fontWeight: 700
    }
  }, percent, "%")));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Hero.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
/**
 * The Wave — SegmentedControl
 * The product's "view switch": a pill container of segments with the
 * active one filled blue. Mirrors .view-switch / .vsw in the source.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--panel-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-xl)',
      padding: '3px',
      gap: '2px',
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        border: 'none',
        background: active ? 'var(--blue)' : 'transparent',
        color: active ? 'var(--cream)' : 'var(--muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: '.85rem',
        padding: '7px 13px',
        borderRadius: 'var(--r-md)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background-color .15s ease, color .15s ease'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Select
 * The "field pill" dropdown. Dark by default, or `light` for use on
 * cream cards. Mono uppercase, chevron drawn as an inline SVG background.
 */
function Select({
  options = [],
  value,
  onChange,
  light = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const stroke = light ? '323232' : '9b9890';
  const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23${stroke}' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: '11.5px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--r-xl)',
      padding: '11px 34px 11px 16px',
      cursor: 'pointer',
      background: light ? 'var(--cream-in)' : hover ? '#3d3d39' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${light ? hover ? 'var(--blue)' : 'var(--cream-bd)' : hover ? '#5a8bff' : 'var(--border)'}`,
      backgroundImage: chevron,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      backgroundSize: '13px',
      transition: 'border-color .15s ease, background .15s ease',
      ...style
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, label);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
/**
 * The Wave — Spinner
 * Circular loading indicator. Blue leading arc on a faint ring.
 */
function Spinner({
  size = 42,
  style
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `@keyframes tw-spin{to{transform:rotate(360deg)}}`), /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-label": "Caricamento",
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `${Math.max(3, size / 10)}px solid rgba(255,255,255,.15)`,
      borderTopColor: 'var(--blue)',
      animation: 'tw-spin .8s linear infinite',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/SprintProjectRow.jsx
try { (() => {
/**
 * The Wave — SprintProjectRow
 * A colored card summarising one project's story-point progress:
 * code, name, assigned vs worked SP, and a progress bar. The whole
 * row is tinted with the project color; text ink auto-contrasts.
 */
function inkFor(hex) {
  const n = parseInt(String(hex).slice(1), 16);
  const r = n >> 16,
    g = n >> 8 & 255,
    b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#323232' : '#FAF7EB';
}
function SprintProjectRow({
  code,
  name,
  color = '#0057FF',
  assigned = 0,
  worked = 0,
  style
}) {
  const ink = inkFor(color);
  const pct = assigned ? Math.min(100, Math.round(worked / assigned * 100)) : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      borderRadius: 'var(--r-6xl)',
      padding: '16px',
      background: color,
      color: ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: '1.9rem',
      lineHeight: 1,
      letterSpacing: '-.01em'
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.9rem',
      opacity: .75
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px',
      fontSize: '10.5px',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      opacity: .85
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, "Assegnati", /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.2rem',
      textTransform: 'none',
      letterSpacing: 0
    }
  }, assigned, " SP")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, "Lavorati", /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.2rem',
      textTransform: 'none',
      letterSpacing: 0
    }
  }, worked, " SP"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 'var(--r-pill)',
      overflow: 'hidden',
      background: 'color-mix(in srgb, currentColor 18%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--r-pill)',
      background: 'currentColor',
      transition: 'width .5s cubic-bezier(.2,.8,.2,1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '11px',
      opacity: .8
    }
  }, pct, "% completato"));
}
Object.assign(__ds_scope, { SprintProjectRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SprintProjectRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — StatTile
 * A big-number tile in three tones: sand, dark, or yellow. Lifts on
 * hover. Number is heavy, tabular; label is mono uppercase.
 */
function StatTile({
  num,
  label,
  tone = 'sand',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    sand: {
      bg: 'var(--sand)',
      num: 'var(--black)',
      lab: '#6b645c'
    },
    dark: {
      bg: 'var(--panel-2)',
      num: 'var(--cream)',
      lab: 'var(--muted)'
    },
    yellow: {
      bg: 'var(--yellow)',
      num: '#323232',
      lab: '#6b5e00'
    }
  };
  const t = tones[tone] || tones.sand;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      borderRadius: 'var(--r-3xl)',
      padding: '18px 18px 16px',
      minHeight: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transform: hover ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? 'var(--shadow-tile)' : 'none',
      transition: 'transform .15s ease, box-shadow .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      color: t.num
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginTop: '9px',
      color: t.lab
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/StreakPill.jsx
try { (() => {
/**
 * The Wave — StreakPill
 * Small translucent pill used on the blue hero to show a streak or
 * short status. Mono, e.g. "🔥 4 giorni di fila". Mirrors .game-streak.
 */
function StreakPill({
  children,
  onBlue = true,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--r-pill)',
      background: onBlue ? 'rgba(255,255,255,.18)' : 'var(--panel-2)',
      color: 'var(--cream)',
      fontSize: '.7rem',
      fontWeight: 700,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StreakPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StreakPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * The Wave — Tabs
 * Horizontal tab bar. The active tab fills black with cream text;
 * inactive tabs are muted mono labels that darken on hover.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      onMouseEnter: () => setHover(val),
      onMouseLeave: () => setHover(null),
      style: {
        padding: '10px 18px',
        borderRadius: 'var(--r-lg)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: '11.5px',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        fontWeight: active ? 700 : 400,
        backgroundColor: active ? 'var(--black)' : 'transparent',
        color: active ? 'var(--cream)' : hover === val ? 'var(--black)' : 'var(--cream-mut)',
        transition: 'background-color .15s ease, color .15s ease'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Textarea
 * Multiline text field matching Input's look. `light` for cream cards.
 */
function Textarea({
  label,
  light = false,
  rows = 4,
  style,
  wrapStyle,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const taId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    className: "mono",
    style: {
      display: 'block',
      fontSize: '10.5px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      padding: '13px 15px',
      fontSize: '.95rem',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.5,
      outline: 'none',
      resize: 'vertical',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${focus ? light ? 'var(--blue)' : '#5a8bff' : light ? 'var(--cream-bd)' : 'var(--border)'}`,
      transition: 'border-color .15s ease',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — Toast
 * Transient notification. Neutral by default; `success` outlines blue,
 * `error` outlines red. Sits on the dark raised surface.
 */
function Toast({
  children,
  type = 'neutral',
  style,
  ...rest
}) {
  const borders = {
    neutral: 'var(--border)',
    success: 'var(--blue)',
    error: 'var(--danger)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      background: 'var(--panel-2)',
      color: type === 'error' ? '#ffd9d9' : 'var(--cream)',
      border: `1px solid ${borders[type] || borders.neutral}`,
      borderRadius: 'var(--r-xl)',
      padding: '11px 16px',
      fontSize: '.9rem',
      boxShadow: 'var(--shadow-toast)',
      maxWidth: '90vw',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/WeekButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — WeekButton
 * Small mono selector used for sprint weeks. Active fills blue;
 * hover outlines blue. Lives on cream surfaces.
 */
function WeekButton({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 13px',
      borderRadius: 'var(--r-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      backgroundColor: active ? 'var(--blue)' : 'var(--cream)',
      color: active ? 'var(--cream)' : hover ? 'var(--blue)' : 'var(--cream-mut)',
      border: `1px solid ${active || hover ? 'var(--blue)' : 'var(--cream-bd)'}`,
      transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { WeekButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WeekButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChipSelect.jsx
try { (() => {
/**
 * The Wave — ChipSelect
 * Single-select group of pill "chips" — the product's avatar-picker
 * pattern (.ac-chip / .is-active). The active chip fills brand blue.
 * A compact, on-brand alternative to a radio group.
 */
function ChipSelect({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        border: `1px solid ${active ? 'var(--blue)' : 'var(--border)'}`,
        background: active ? 'var(--blue)' : 'var(--panel-2)',
        color: 'var(--cream)',
        borderRadius: 'var(--r-pill)',
        padding: '5px 12px',
        fontSize: '.78rem',
        fontFamily: 'var(--font-sans)',
        cursor: 'pointer',
        transition: 'background-color .12s ease, border-color .12s ease'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { ChipSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChipSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/ColorSwatchPicker.jsx
try { (() => {
/**
 * The Wave — ColorSwatchPicker
 * Row of round color swatches; the selected one gets a cream border +
 * blue ring. Mirrors .ac-swatch and the project color picker. Defaults
 * to the brand data-viz palette.
 */
const DEFAULT_PALETTE = ['#0057FF', '#FFD400', '#CDC3BA', '#323232', '#1A66FF', '#00A98F', '#FF6B35'];
function ColorSwatchPicker({
  colors = DEFAULT_PALETTE,
  value,
  onChange,
  size = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      ...style
    }
  }, colors.map(c => {
    const active = value && value.toLowerCase() === c.toLowerCase();
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      onClick: () => onChange && onChange(c),
      "aria-label": c,
      title: c,
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: c,
        cursor: 'pointer',
        padding: 0,
        border: `2px solid ${active ? 'var(--cream)' : 'transparent'}`,
        boxShadow: active ? '0 0 0 2px var(--blue)' : '0 0 0 1px var(--border)',
        transition: 'box-shadow .12s ease'
      }
    });
  }));
}
Object.assign(__ds_scope, { ColorSwatchPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ColorSwatchPicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — DateField
 * A native date input styled to match the form fields. Mirrors the
 * sprint start/end date inputs. `light` for cream cards.
 */
function DateField({
  light = false,
  value,
  onChange,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "date",
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      padding: '12px 15px',
      fontSize: '.95rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      colorScheme: light ? 'light' : 'dark',
      border: `1px solid ${focus ? light ? 'var(--blue)' : '#5a8bff' : light ? 'var(--cream-bd)' : 'var(--border)'}`,
      transition: 'border-color .15s ease',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { DateField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateField.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * The Wave — FormField
 * Labeling wrapper for any control: mono uppercase label, optional
 * required mark, hint, and error text. Mirrors the product's
 * modal-lab / modal-hint pattern. Wrap an Input/Select/etc as children.
 */
function FormField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  light = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    className: "mono",
    style: {
      display: 'block',
      fontSize: '10.5px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      marginBottom: '8px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: '4px'
    }
  }, "*")), children, hint && !error && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: light ? 'var(--cream-dim)' : '#6f6e68',
      marginTop: '8px'
    }
  }, hint), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--danger)',
      marginTop: '6px'
    }
  }, error));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — NumberField
 * Mono, right-aligned numeric input with − / + steppers. Mirrors the
 * project story-point field (.pm-sp) in the source. `light` for cream.
 */
function NumberField({
  value = 0,
  onChange,
  min = 0,
  max = Infinity,
  step = 0.5,
  light = false,
  style,
  ...rest
}) {
  const set = v => {
    const n = Math.max(min, Math.min(max, v));
    onChange && onChange(n);
  };
  const btn = {
    width: 34,
    height: 34,
    flex: 'none',
    borderRadius: 'var(--r-md)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    lineHeight: 1,
    background: light ? 'var(--cream-in)' : 'var(--panel-2)',
    color: light ? 'var(--black)' : 'var(--cream)',
    border: `1px solid ${light ? 'var(--cream-bd)' : 'var(--border)'}`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => set(Number(value) - step),
    "aria-label": "Diminuisci",
    style: btn
  }, "\u2212"), /*#__PURE__*/React.createElement("input", _extends({
    type: "number",
    value: value,
    min: min,
    max: max === Infinity ? undefined : max,
    step: step,
    onChange: e => set(parseFloat(e.target.value) || 0),
    style: {
      width: 70,
      minWidth: 0,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: '.9rem',
      borderRadius: 'var(--r-md)',
      padding: '11px 12px',
      outline: 'none',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${light ? 'var(--cream-bd)' : 'var(--border)'}`
    }
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => set(Number(value) + step),
    "aria-label": "Aumenta",
    style: btn
  }, "+"));
}
Object.assign(__ds_scope, { NumberField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberField.jsx", error: String((e && e.message) || e) }); }

// components/forms/PasswordInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — PasswordInput
 * Password field with a show/hide eye toggle. Mirrors .pw-wrap /
 * .pw-toggle in the source. `light` for cream cards.
 */
function PasswordInput({
  label,
  light = false,
  style,
  wrapStyle,
  id,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const inId = id || 'pw-field';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inId,
    className: "mono",
    style: {
      display: 'block',
      fontSize: '10.5px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inId,
    type: show ? 'text' : 'password',
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      padding: '13px 44px 13px 15px',
      fontSize: '.95rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${focus ? light ? 'var(--blue)' : '#5a8bff' : light ? 'var(--cream-bd)' : 'var(--border)'}`,
      transition: 'border-color .15s ease',
      ...style
    }
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShow(s => !s),
    title: show ? 'Nascondi password' : 'Mostra password',
    "aria-label": show ? 'Nascondi password' : 'Mostra password',
    style: {
      position: 'absolute',
      top: '50%',
      right: '12px',
      transform: 'translateY(-50%)',
      display: 'flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: light ? '#000' : 'var(--muted)',
      opacity: show ? 1 : .55,
      padding: '2px',
      transition: 'opacity .15s ease'
    }
  }, show ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.9 9.9a3 3 0 0 0 4.2 4.2"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })))));
}
Object.assign(__ds_scope, { PasswordInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PasswordInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/**
 * The Wave — RadioGroup
 * Classic radio list with a brand-blue filled dot. Vertical by default;
 * pass `inline` for a horizontal row.
 */
function RadioGroup({
  name,
  options = [],
  value,
  onChange,
  inline = false,
  onCream = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',
      flexWrap: 'wrap',
      gap: inline ? '18px' : '10px',
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: active,
      onChange: () => onChange && onChange(val),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: 'none',
        borderRadius: '50%',
        border: `1.5px solid ${active ? 'var(--blue)' : onCream ? '#c9c5b9' : 'var(--border)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color .15s ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'var(--blue)',
        transform: active ? 'scale(1)' : 'scale(0)',
        transition: 'transform .15s ease'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.95rem',
        color: onCream ? '#2a2a26' : 'var(--cream)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Wave — SearchInput
 * Text field with a leading magnifier icon; clears via the trailing ×
 * when it has a value. Mirrors the collaborator search field.
 */
function SearchInput({
  light = false,
  value,
  onChange,
  onClear,
  placeholder = 'Cerca…',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const hasVal = value != null && value !== '';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 15,
      height: 15,
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      borderRadius: 'var(--r-xl)',
      padding: '13px 40px 13px 40px',
      fontSize: '.95rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      background: light ? 'var(--cream-in)' : 'var(--panel-2)',
      color: light ? 'var(--black)' : 'var(--cream)',
      border: `1px solid ${focus ? light ? 'var(--blue)' : '#5a8bff' : light ? 'var(--cream-bd)' : 'var(--border)'}`,
      transition: 'border-color .15s ease'
    }
  }, rest)), hasVal && onClear && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear,
    "aria-label": "Cancella",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 18,
      height: 18,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: light ? 'var(--cream-mut)' : 'var(--muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * The Wave — Switch
 * On/off toggle. Track fills brand blue when on; knob slides. A
 * brand-consistent addition (the product uses button groups for
 * on/off, e.g. the theme toggle) for forms that need a true switch.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  onCream = false,
  style
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 42,
      height: 24,
      flex: 'none',
      borderRadius: 'var(--r-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 0,
      position: 'relative',
      opacity: disabled ? 0.5 : 1,
      background: checked ? 'var(--blue)' : onCream ? 'var(--cream-bd)' : 'var(--border)',
      transition: 'background-color .18s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--cream)',
      boxShadow: '0 1px 3px rgba(0,0,0,.3)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform .18s cubic-bezier(.2,.8,.2,1)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, sw);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, sw, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.95rem',
      color: onCream ? '#2a2a26' : 'var(--cream)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storypoints/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Wave — Storypoints Workspace UI kit.
   Faithful recreation of the product's screens, composed from the
   design-system primitives (window.TheWaveDesignSystem_664d29).
   All screens assign to window at the end for cross-file use. */

const NS = window.TheWaveDesignSystem_664d29;
const {
  Button,
  IconButton,
  Select,
  Input,
  Checkbox,
  Tabs,
  Card,
  StatTile,
  Hero,
  GameStat,
  ProgressBar,
  SprintProjectRow,
  Chip,
  Badge,
  NavItem,
  WeekButton,
  Spinner
} = NS;

/* ---- Lucide-style stroke icons ---- */
const I = p => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p));
const IcMenu = () => /*#__PURE__*/React.createElement(I, null, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));
const IcPlus = () => /*#__PURE__*/React.createElement(I, {
  strokeWidth: "2.4"
}, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const IcFolder = () => /*#__PURE__*/React.createElement(I, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}));
const IcBold = () => /*#__PURE__*/React.createElement(I, {
  strokeWidth: "2.4"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 4h8a4 4 0 0 1 0 8H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12h9a4 4 0 0 1 0 8H6z"
}));
const IcItalic = () => /*#__PURE__*/React.createElement(I, {
  strokeWidth: "2.4"
}, /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "4",
  x2: "10",
  y2: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "20",
  x2: "5",
  y2: "20"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15",
  y1: "4",
  x2: "9",
  y2: "20"
}));
const IcList = () => /*#__PURE__*/React.createElement(I, null, /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "18",
  x2: "21",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "3.01",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "3.01",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "3.01",
  y2: "18"
}));

/* ---- Sample data (mirrors the product's shape) ---- */
const PROJECTS = [{
  code: 'RCA',
  name: 'Restyle Cliente A',
  color: '#0057FF',
  assigned: 20,
  worked: 13
}, {
  code: 'ABX',
  name: 'App Cliente B',
  color: '#FFD400',
  assigned: 12,
  worked: 12
}, {
  code: 'DOC',
  name: 'Documentazione',
  color: '#CDC3BA',
  assigned: 8,
  worked: 3
}, {
  code: 'INT',
  name: 'Interni Studio',
  color: '#00A98F',
  assigned: 6,
  worked: 4
}];
const HOURS = ['09–10', '10–11', '11–12', '12–13', '14–15', '15–16', '16–17', '17–18'];
const DAYS = [['Lun', '02'], ['Mar', '03'], ['Mer', '04'], ['Gio', '05'], ['Ven', '06']];
// pre-painted timesheet: map "day,hour" -> project index
const GRID = {
  '0,0': 0,
  '0,1': 0,
  '0,2': 0,
  '0,4': 2,
  '0,5': 2,
  '1,0': 0,
  '1,1': 0,
  '1,3': 1,
  '1,4': 1,
  '1,5': 1,
  '2,0': 1,
  '2,1': 1,
  '2,2': 1,
  '2,5': 3,
  '3,0': 0,
  '3,1': 0,
  '3,2': 3,
  '3,3': 3,
  '3,6': 2,
  '4,0': 2,
  '4,4': 1,
  '4,5': 1,
  '4,6': 1
};
function inkFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = n >> 16,
    g = n >> 8 & 255,
    b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#323232' : '#FAF7EB';
}

/* ============================ AUTH ============================ */
function AuthScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '18px',
      width: '100%',
      maxWidth: '24rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--cream)'
    }
  }, "Storypoints Workspace"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--panel)',
      borderRadius: 'var(--r-4xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-modal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      background: 'var(--blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 800,
      color: 'var(--cream)'
    }
  }, "Accedi")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    light: true,
    placeholder: "tu@esempio.it",
    wrapStyle: {
      marginBottom: '16px'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    light: true,
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    wrapStyle: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onLogin,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Accedi"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      width: '100%'
    }
  }, "Non hai un account? Registrati"))))));
}

/* ============================ SIDEBAR ============================ */
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: '0 0 210px',
      background: 'var(--panel-2)',
      borderRight: '1px solid var(--line)',
      padding: '22px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    title: "Apri/chiudi menu",
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(IcMenu, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--r-2xl)',
      background: 'var(--blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cream)',
      fontWeight: 900,
      fontSize: '1rem'
    }
  }, "W")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap'
    }
  }, "The Wave")), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--line)',
      margin: '0 0 14px',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "\uD83C\uDFAE",
    active: view === 'game',
    onClick: () => setView('game')
  }, "Dashboard"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "\uD83D\uDCCA",
    active: view === 'track',
    onClick: () => setView('track')
  }, "Tracking"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--yellow)',
      boxShadow: '0 0 0 2px var(--border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.82rem',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Simo Rossi")));
}

/* ============================ DASHBOARD (gamification) ============================ */
function Dashboard({
  setView
}) {
  const badges = [{
    ico: '🚀',
    name: 'Primo progetto',
    desc: 'Crea 1 progetto',
    on: true
  }, {
    ico: '🗓️',
    name: 'Pianificatore',
    desc: '3 sprint',
    on: false
  }, {
    ico: '✅',
    name: 'Spedizioniere',
    desc: '10 task completati',
    on: true
  }, {
    ico: '⭐',
    name: 'Mezzo cento',
    desc: '50 story points',
    on: false
  }, {
    ico: '🏆',
    name: 'Centurione',
    desc: '100 story points',
    on: false
  }, {
    ico: '🔥',
    name: 'Maratoneta',
    desc: '50 task completati',
    on: false
  }];
  const earned = badges.filter(b => b.on).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px',
      flex: 1,
      minHeight: 0,
      display: 'grid',
      gap: '14px',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridTemplateRows: 'auto auto 1fr',
      gridTemplateAreas: '"hero hero hero hero" "s1 s2 s3 s4" "obj obj obj trk"'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      gridArea: 'hero',
      background: 'var(--blue)',
      color: 'var(--cream)',
      borderRadius: 'var(--r-4xl)',
      padding: '20px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.16)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: '.6rem',
      opacity: .8,
      fontWeight: 600,
      letterSpacing: '.1em'
    }
  }, "LIVELLO"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.6rem'
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '1.15rem',
      marginBottom: '10px'
    }
  }, "Continua cos\xEC! \uD83C\uDFAF", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: '10px',
      padding: '3px 10px',
      borderRadius: '99px',
      background: 'rgba(255,255,255,.18)',
      fontSize: '.7rem',
      fontWeight: 700
    }
  }, "\uD83D\uDD25 4 giorni di fila")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.8rem',
      opacity: .9,
      marginBottom: '6px'
    }
  }, "340 XP totali"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 40,
    onBlue: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.75rem',
      opacity: .85,
      marginTop: '7px'
    }
  }, "60 XP al livello 4"))), /*#__PURE__*/React.createElement(GameStat, {
    style: {
      gridArea: 's1'
    },
    num: "12",
    label: "Task fatti"
  }), /*#__PURE__*/React.createElement(GameStat, {
    style: {
      gridArea: 's2'
    },
    num: "32",
    label: "Story points"
  }), /*#__PURE__*/React.createElement(GameStat, {
    style: {
      gridArea: 's3'
    },
    num: "4",
    label: "Progetti"
  }), /*#__PURE__*/React.createElement(GameStat, {
    style: {
      gridArea: 's4'
    },
    num: "02",
    label: "Sprint"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      gridArea: 'obj',
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-3xl)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.78rem',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: '14px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Obiettivi"), /*#__PURE__*/React.createElement("span", null, earned, "/", badges.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '12px'
    }
  }, badges.map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b.name,
    icon: b.ico,
    name: b.name,
    desc: b.desc,
    locked: !b.on
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      gridArea: 'trk',
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-3xl)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '.78rem',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: '14px'
    }
  }, "Tracking progetti"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontSize: '.85rem'
    }
  }, "12/18 task completati \xB7 32 SP su 4 progetti"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setView('track'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Apri tracking completo"))));
}

/* ============================ TRACKING ============================ */
function SprintSummary() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(280px,340px) 1fr',
      gap: '14px',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    name: "Sprint Luglio",
    range: "02 lug \u2013 27 lug 2025",
    done: 32,
    total: 46,
    capLabel: "Story points",
    style: {
      gridColumn: '1',
      gridRow: '1 / span 2'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    tone: "sand",
    num: "4",
    label: "Progetti"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "dark",
    num: "12",
    label: "Task fatti"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "yellow",
    num: "70%",
    label: "Completato"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "sand",
    num: "46",
    label: "SP assegnati"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: '2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10.5px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--cream-mut)',
      marginBottom: '18px'
    }
  }, "Story Points per progetto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '14px'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(SprintProjectRow, _extends({
    key: p.code
  }, p))))));
}
function CalendarPane() {
  const [week, setWeek] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: 'var(--black)'
    }
  }, "Timesheet \xB7 Settimana ", week + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '7px'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement(WeekButton, {
    key: i,
    active: i === week,
    onClick: () => setWeek(i)
  }, "Sett ", i + 1)))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--cream-dim)',
      marginBottom: '12px'
    }
  }, "Clicca o trascina sulle celle per assegnare un progetto \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '60px repeat(5,1fr)',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", null), DAYS.map(([n, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: 'center',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '.82rem',
      color: 'var(--black)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '9.5px',
      color: 'var(--cream-dim)',
      marginTop: '2px'
    }
  }, d, " LUG"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '9.5px',
      color: 'var(--cream-dim)',
      marginTop: '3px'
    }
  }, "8h")))), HOURS.map((label, hi) => /*#__PURE__*/React.createElement("div", {
    key: hi,
    style: {
      display: 'grid',
      gridTemplateColumns: '60px repeat(5,1fr)',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '8px',
      fontSize: '9.5px',
      color: 'var(--cream-mut)'
    }
  }, label), DAYS.map((_, di) => {
    const pi = GRID[`${di},${hi}`];
    const p = pi != null ? PROJECTS[pi] : null;
    return p ? /*#__PURE__*/React.createElement("div", {
      key: di,
      style: {
        minHeight: 34,
        borderRadius: 'var(--r-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '.08em',
        background: p.color,
        color: inkFor(p.color)
      }
    }, p.code) : /*#__PURE__*/React.createElement("div", {
      key: di,
      style: {
        minHeight: 34,
        borderRadius: 'var(--r-md)',
        background: 'var(--cream-cell)'
      }
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      marginTop: '22px',
      paddingTop: '20px',
      borderTop: '1px solid var(--cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '10.5px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--cream-mut)'
    }
  }, "Progetti assegnati:"), PROJECTS.map(p => /*#__PURE__*/React.createElement(Chip, {
    key: p.code,
    color: p.color
  }, p.name))));
}
function WorkspacePane() {
  const [project, setProject] = React.useState('RCA');
  const p = PROJECTS.find(x => x.code === project);
  const [checks, setChecks] = React.useState([{
    label: 'Kickoff e brief con il cliente',
    done: true
  }, {
    label: 'Wireframe delle schermate chiave',
    done: true
  }, {
    label: 'Design system e componenti',
    done: false
  }, {
    label: 'Review interna e handoff',
    done: false
  }]);
  const toggle = i => setChecks(cs => cs.map((c, j) => j === i ? {
    ...c,
    done: !c.done
  } : c));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.25rem',
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      color: 'var(--blue)'
    }
  }, /*#__PURE__*/React.createElement(IcFolder, null)), "Workspace progetti"), /*#__PURE__*/React.createElement(Select, {
    light: true,
    value: project,
    onChange: e => setProject(e.target.value),
    options: PROJECTS.map(x => x.code)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      borderRadius: 'var(--r-4xl)',
      borderTop: `5px solid ${p.color}`,
      padding: '18px 20px',
      boxShadow: '0 1px 0 var(--cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '16px',
      marginBottom: '18px',
      borderBottom: '1px solid var(--cream-line)',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.05rem',
      fontWeight: 800,
      color: 'var(--black)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      color: p.color
    }
  }, /*#__PURE__*/React.createElement(IcFolder, null)), p.code, " \u2014 ", p.name, " \xB7 ", p.assigned, " SP"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      alignItems: 'center',
      color: 'var(--cream-mut)'
    }
  }, [IcBold, IcItalic, IcList].map((Ico, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--r-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement(Ico, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--cream-line)',
      margin: '0 5px'
    }
  }), ['H1', 'H2', 'H3', 'P'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "mono",
    style: {
      minWidth: 30,
      padding: '0 7px',
      height: 30,
      borderRadius: 'var(--r-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#2a2a26',
      fontSize: '.95rem'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 800,
      letterSpacing: '-.01em',
      margin: '.4em 0 .35em'
    }
  }, "Obiettivo dello sprint"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 .55em',
      lineHeight: 1.6
    }
  }, "Consegnare il restyle completo dell'area cliente, con la nuova palette e i componenti condivisi. Priorit\xE0 alla coerenza visiva tra le schermate."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      margin: '.8em 0 .3em'
    }
  }, "Da fare questa settimana"), /*#__PURE__*/React.createElement("div", null, checks.map((c, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: i,
    label: c.label,
    checked: c.done,
    onChange: () => toggle(i)
  }))))));
}
function Tracking() {
  const [tab, setTab] = React.useState('summary');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      borderRadius: 'var(--r-6xl)',
      padding: '20px 22px 22px',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'summary',
      label: 'Sprint'
    }, {
      value: 'calendar',
      label: 'Calendario Ore'
    }, {
      value: 'workspace',
      label: 'Workspace Progetti'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Sprint Luglio', 'Sprint Agosto']
  }), /*#__PURE__*/React.createElement(IconButton, {
    title: "Nuovo Sprint",
    style: {
      borderColor: 'var(--blue)',
      background: 'var(--blue)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(IcPlus, null)))), tab === 'summary' && /*#__PURE__*/React.createElement(SprintSummary, null), tab === 'calendar' && /*#__PURE__*/React.createElement(CalendarPane, null), tab === 'workspace' && /*#__PURE__*/React.createElement(WorkspacePane, null)));
}

/* ============================ APP SHELL ============================ */
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('game');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--panel)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }
  }, view === 'game' ? /*#__PURE__*/React.createElement(Dashboard, {
    setView: setView
  }) : /*#__PURE__*/React.createElement(Tracking, null)), !authed && /*#__PURE__*/React.createElement(AuthScreen, {
    onLogin: () => setAuthed(true)
  }));
}
Object.assign(window, {
  TWApp: App,
  TWAuth: AuthScreen,
  TWDashboard: Dashboard,
  TWTracking: Tracking,
  TWSidebar: Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storypoints/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.GameStat = __ds_scope.GameStat;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LevelBadge = __ds_scope.LevelBadge;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.SprintProjectRow = __ds_scope.SprintProjectRow;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.StreakPill = __ds_scope.StreakPill;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.WeekButton = __ds_scope.WeekButton;

__ds_ns.ChipSelect = __ds_scope.ChipSelect;

__ds_ns.ColorSwatchPicker = __ds_scope.ColorSwatchPicker;

__ds_ns.DateField = __ds_scope.DateField;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.NumberField = __ds_scope.NumberField;

__ds_ns.PasswordInput = __ds_scope.PasswordInput;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Switch = __ds_scope.Switch;

})();
