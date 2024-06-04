'use client';
import { UserContext } from '@/context/UserContext';
import FormHOC from '@/hocs/FormHOC/FormHOC';
import { Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

export const AuthorizationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const creds = {
      email: email.trim(),
      password: password.trim(),
      redirect: false,
    };

    signIn('credentials', creds)
      .then((response) => {
        router.replace('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="auth">
      <div className="auth__logo">
        <svg
          width="71"
          height="24"
          viewBox="0 0 71 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.744 10.544C8.60533 10.32 8.408 10.1493 8.152 10.032C7.896 9.904 7.58667 9.84 7.224 9.84C6.54133 9.84 6.01333 10.064 5.64 10.512C5.26667 10.9493 5.08 11.552 5.08 12.32C5.08 13.2053 5.288 13.8667 5.704 14.304C6.12 14.7413 6.76 14.96 7.624 14.96C8.44533 14.96 9.10667 14.6293 9.608 13.968H6.776V11.456H12.552V15.008C12.0613 15.8507 11.384 16.576 10.52 17.184C9.656 17.7813 8.56267 18.08 7.24 18.08C6.06667 18.08 5.04267 17.84 4.168 17.36C3.304 16.8693 2.63733 16.1867 2.168 15.312C1.70933 14.4373 1.48 13.44 1.48 12.32C1.48 11.2 1.70933 10.2027 2.168 9.328C2.63733 8.45333 3.304 7.776 4.168 7.296C5.032 6.80533 6.04533 6.56 7.208 6.56C8.69067 6.56 9.896 6.91733 10.824 7.632C11.7627 8.34667 12.3173 9.31733 12.488 10.544H8.744ZM21.0953 16.288H17.3193L16.7593 18H13.0312L17.1753 6.672H21.2713L25.3993 18H21.6553L21.0953 16.288ZM20.2313 13.616L19.2073 10.464L18.1833 13.616H20.2313ZM39.8223 6.672V18H36.2863V12.352L34.5423 18H31.5023L29.7583 12.352V18H26.2063V6.672H30.5583L33.0543 13.472L35.4863 6.672H39.8223ZM44.977 9.504V10.896H48.497V13.568H44.977V15.168H48.977V18H41.425V6.672H48.977V9.504H44.977ZM58.3156 6.672V9.488H53.8676V11.056H57.0676V13.728H53.8676V18H50.3156V6.672H58.3156ZM70.3988 6.672L66.3348 14.56V18H62.7828V14.56L58.7188 6.672H62.7828L64.5908 10.688L66.3988 6.672H70.3988Z"
            fill="#3259E8"
          />
          <path
            d="M7.744 10.544C7.60533 10.32 7.408 10.1493 7.152 10.032C6.896 9.904 6.58667 9.84 6.224 9.84C5.54133 9.84 5.01333 10.064 4.64 10.512C4.26667 10.9493 4.08 11.552 4.08 12.32C4.08 13.2053 4.288 13.8667 4.704 14.304C5.12 14.7413 5.76 14.96 6.624 14.96C7.44533 14.96 8.10667 14.6293 8.608 13.968H5.776V11.456H11.552V15.008C11.0613 15.8507 10.384 16.576 9.52 17.184C8.656 17.7813 7.56267 18.08 6.24 18.08C5.06667 18.08 4.04267 17.84 3.168 17.36C2.304 16.8693 1.63733 16.1867 1.168 15.312C0.709333 14.4373 0.48 13.44 0.48 12.32C0.48 11.2 0.709333 10.2027 1.168 9.328C1.63733 8.45333 2.304 7.776 3.168 7.296C4.032 6.80533 5.04533 6.56 6.208 6.56C7.69067 6.56 8.896 6.91733 9.824 7.632C10.7627 8.34667 11.3173 9.31733 11.488 10.544H7.744ZM20.0953 16.288H16.3193L15.7593 18H12.0312L16.1753 6.672H20.2713L24.3993 18H20.6553L20.0953 16.288ZM19.2313 13.616L18.2073 10.464L17.1833 13.616H19.2313ZM38.8223 6.672V18H35.2863V12.352L33.5423 18H30.5023L28.7583 12.352V18H25.2063V6.672H29.5583L32.0543 13.472L34.4863 6.672H38.8223ZM43.977 9.504V10.896H47.497V13.568H43.977V15.168H47.977V18H40.425V6.672H47.977V9.504H43.977ZM57.3156 6.672V9.488H52.8676V11.056H56.0676V13.728H52.8676V18H49.3156V6.672H57.3156ZM69.3988 6.672L65.3348 14.56V18H61.7828V14.56L57.7188 6.672H61.7828L63.5908 10.688L65.3988 6.672H69.3988Z"
            fill="white"
          />
        </svg>
      </div>
      <FormHOC
        titleValue={'Hi there!'}
        subtitleValue={'Welcome to Gamefy - a place for geeks.'}
        buttonText={'Sign in'}
        footerText={'Don`t have an account?'}
        footerLinkText={'Sign up'}
        footerLinkAction={'/registration'}
        handleSubmit={handleSubmit}>
        <div className="auth__inputgroup">
          <Input
            isClearable
            type="email"
            label="Enter your email"
            placeholder="example@mail.com"
            labelPlacement="outside"
            className="auth__input input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClear={() => setEmail('')}
            required
            startContent={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_260_7663)">
                  <path
                    d="M19 1H5C3.67441 1.00159 2.40356 1.52888 1.46622 2.46622C0.528882 3.40356 0.00158786 4.67441 0 6L0 18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.67441 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V6C23.9984 4.67441 23.4711 3.40356 22.5338 2.46622C21.5964 1.52888 20.3256 1.00159 19 1ZM5 3H19C19.5988 3.00118 20.1835 3.18151 20.679 3.5178C21.1744 3.85409 21.5579 4.33095 21.78 4.887L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2.22 4.887C2.44215 4.33095 2.82561 3.85409 3.32105 3.5178C3.81648 3.18151 4.40121 3.00118 5 3ZM19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z"
                    fill="#475467"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_260_7663">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          <div>
            <Input
              isClearable
              type={isPasswordVisible ? 'text' : 'password'}
              label="Enter your email password"
              placeholder="**********"
              labelPlacement="outside"
              className="auth__input input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <g clipPath="url(#clip0_260_5466)">
                    <path
                      d="M19 8.424V7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7V8.424C4.10936 8.81271 3.35129 9.45252 2.8185 10.2652C2.28571 11.0779 2.00128 12.0282 2 13V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.67441 23.9984 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V13C21.9987 12.0282 21.7143 11.0779 21.1815 10.2652C20.6487 9.45252 19.8906 8.81271 19 8.424ZM7 7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8H7V7ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10H17C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19Z"
                      fill="#475467"
                    />
                    <path
                      d="M12 13.9995C11.7348 13.9995 11.4804 14.1049 11.2929 14.2924C11.1054 14.4799 11 14.7343 11 14.9995V16.9995C11 17.2647 11.1054 17.5191 11.2929 17.7066C11.4804 17.8941 11.7348 17.9995 12 17.9995C12.2652 17.9995 12.5196 17.8941 12.7071 17.7066C12.8947 17.5191 13 17.2647 13 16.9995V14.9995C13 14.7343 12.8947 14.4799 12.7071 14.2924C12.5196 14.1049 12.2652 13.9995 12 13.9995Z"
                      fill="#475467"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_260_5466">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              endContent={
                <span onClick={handleTogglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_118_5297)">
                        <path
                          d="M23.49 9.96682C22.5873 8.48855 21.4486 7.16808 20.119 6.05782L22.919 3.25782C23.1012 3.06922 23.202 2.81662 23.1997 2.55442C23.1974 2.29222 23.0923 2.04141 22.9069 1.856C22.7215 1.6706 22.4706 1.56543 22.2084 1.56315C21.9462 1.56087 21.6936 1.66166 21.505 1.84382L18.46 4.89282C16.5724 3.77164 14.4145 3.18729 12.219 3.20282C6.02805 3.20282 2.50005 7.44082 0.948045 9.96682C0.468573 10.7423 0.2146 11.6361 0.2146 12.5478C0.2146 13.4596 0.468573 14.3533 0.948045 15.1288C1.8508 16.6071 2.98953 17.9276 4.31905 19.0378L1.51905 21.8378C1.42354 21.9301 1.34735 22.0404 1.29494 22.1624C1.24253 22.2844 1.21495 22.4156 1.21379 22.5484C1.21264 22.6812 1.23794 22.8129 1.28822 22.9358C1.3385 23.0587 1.41276 23.1703 1.50665 23.2642C1.60054 23.3581 1.7122 23.4324 1.83509 23.4826C1.95799 23.5329 2.08967 23.5582 2.22245 23.5571C2.35523 23.5559 2.48645 23.5283 2.60845 23.4759C2.73045 23.4235 2.8408 23.3473 2.93305 23.2518L5.98504 20.1998C7.87031 21.3208 10.0257 21.9062 12.219 21.8928C18.41 21.8928 21.938 17.6548 23.49 15.1288C23.9695 14.3533 24.2235 13.4596 24.2235 12.5478C24.2235 11.6361 23.9695 10.7423 23.49 9.96682ZM2.65205 14.0818C2.36718 13.6209 2.2163 13.0897 2.2163 12.5478C2.2163 12.0059 2.36718 11.4748 2.65205 11.0138C3.98605 8.84782 7.00105 5.20282 12.219 5.20282C13.8793 5.19352 15.5163 5.59366 16.985 6.36782L14.972 8.38082C14.012 7.74342 12.861 7.45782 11.7143 7.57247C10.5676 7.68712 9.49591 8.19496 8.68105 9.00982C7.86618 9.82469 7.35834 10.8964 7.24369 12.0431C7.12904 13.1897 7.41465 14.3408 8.05205 15.3008L5.74204 17.6108C4.51715 16.6205 3.47188 15.4268 2.65205 14.0818ZM15.219 12.5478C15.219 13.3435 14.903 14.1065 14.3404 14.6691C13.7778 15.2318 13.0147 15.5478 12.219 15.5478C11.7736 15.5461 11.3342 15.4435 10.934 15.2478L14.919 11.2628C15.1148 11.663 15.2173 12.1023 15.219 12.5478ZM9.21905 12.5478C9.21905 11.7522 9.53512 10.9891 10.0977 10.4265C10.6603 9.86389 11.4234 9.54782 12.219 9.54782C12.6645 9.54955 13.1038 9.65211 13.504 9.84782L9.51905 13.8328C9.32333 13.4326 9.22077 12.9933 9.21905 12.5478ZM21.786 14.0818C20.452 16.2478 17.437 19.8928 12.219 19.8928C10.5588 19.9021 8.92181 19.502 7.45305 18.7278L9.46605 16.7148C10.4261 17.3522 11.5771 17.6378 12.7238 17.5232C13.8705 17.4085 14.9422 16.9007 15.757 16.0858C16.5719 15.271 17.0798 14.1993 17.1944 13.0526C17.309 11.9059 17.0234 10.7549 16.386 9.79482L18.696 7.48482C19.9209 8.4751 20.9662 9.66887 21.786 11.0138C22.0709 11.4748 22.2218 12.0059 22.2218 12.5478C22.2218 13.0897 22.0709 13.6209 21.786 14.0818Z"
                          fill="#475467"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_118_5297">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.219238 0.547974)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <g clipPath="url(#clip0_260_5470)">
                        <path
                          d="M23.2715 9.41879C21.7205 6.89279 18.1925 2.65479 12.0005 2.65479C5.80854 2.65479 2.28054 6.89279 0.72954 9.41879C0.250068 10.1943 -0.00390625 11.088 -0.00390625 11.9998C-0.00390625 12.9115 0.250068 13.8053 0.72954 14.5808C2.28054 17.1068 5.80854 21.3448 12.0005 21.3448C18.1925 21.3448 21.7205 17.1068 23.2715 14.5808C23.751 13.8053 24.005 12.9115 24.005 11.9998C24.005 11.088 23.751 10.1943 23.2715 9.41879ZM21.5665 13.5338C20.2345 15.6998 17.2195 19.3448 12.0005 19.3448C6.78154 19.3448 3.76654 15.6998 2.43454 13.5338C2.14967 13.0728 1.99879 12.5417 1.99879 11.9998C1.99879 11.4579 2.14967 10.9267 2.43454 10.4658C3.76654 8.29979 6.78154 4.65479 12.0005 4.65479C17.2195 4.65479 20.2345 8.29578 21.5665 10.4658C21.8514 10.9267 22.0023 11.4579 22.0023 11.9998C22.0023 12.5417 21.8514 13.0728 21.5665 13.5338Z"
                          fill="#475467"
                        />
                        <path
                          d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.39991 8.39206 7.75904 9.17295 7.3806 10.0866C7.00217 11.0002 6.90315 12.0055 7.09608 12.9755C7.289 13.9454 7.76521 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0246 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1574 14.7779C16.7068 13.9556 17 12.9889 17 12C16.9984 10.6744 16.4711 9.40356 15.5338 8.46622C14.5964 7.52888 13.3256 7.00159 12 7ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45543 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05765 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15Z"
                          fill="#475467"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_260_5470">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </span>
              }
            />

            <a href="#" className="auth__input-description">
              Forgot password?
            </a>
          </div>
        </div>
      </FormHOC>
    </div>
  );
};