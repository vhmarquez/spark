<?php

function spark_css_alter(&$css){
  unset($css[drupal_get_path('module','block').'/block.css']);
  unset($css[drupal_get_path('module','comment').'/comment.css']);
  unset($css[drupal_get_path('module','date').'/date_api/date.css']);
  unset($css[drupal_get_path('module','field').'/theme/field.css']);
  unset($css[drupal_get_path('module','node').'/node.css']);
  unset($css[drupal_get_path('module','search').'/search.css']);
  unset($css[drupal_get_path('module','user').'/user.css']);
  unset($css[drupal_get_path('module','ctools').'/ctools.css']);
  unset($css[drupal_get_path('module','views').'/css/views.css']);
  unset($css[drupal_get_path('module','system').'/system.base.css']);
  unset($css[drupal_get_path('module','system').'/system.messages.css']);
  unset($css[drupal_get_path('module','system').'/system.theme.css']);
  unset($css[drupal_get_path('module','system').'/system.menus.css']);
}
