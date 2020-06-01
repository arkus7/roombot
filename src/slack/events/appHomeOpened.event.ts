import { EventHandler } from '../utils/types';
import { appHomeView } from '../views/appHome.view';

export function appHomeOpenedHandler(): EventHandler<'app_home_opened'> {
  return async ({ event, context, client }) => {
    try {
      /* view.publish is the method that your app uses to push a view to the Home tab */
      const result = await client.views.publish({
  
        /* retrieves your xoxb token from context */
        token: context.botToken,
  
        /* the user that opened your app's app home */
        user_id: event.user,
  
        /* the view payload that appears in the app home*/
        view: appHomeView()
      });
      console.log('result', result);
    }
    catch (error) {
      console.error(error);
    }
  };
}
