var N = null;var sourcesIndex = {};
sourcesIndex["ruma"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ruma_api"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["ruma_api_macros"] = {"name":"","dirs":[{"name":"api","dirs":[{"name":"request","files":["incoming.rs","outgoing.rs"]},{"name":"response","files":["incoming.rs","outgoing.rs"]}],"files":["attribute.rs","metadata.rs","parse.rs","request.rs","response.rs"]}],"files":["api.rs","lib.rs","util.rs"]};
sourcesIndex["ruma_appservice_api"] = {"name":"","dirs":[{"name":"event","dirs":[{"name":"push_events","files":["v1.rs"]}],"files":["push_events.rs"]},{"name":"query","dirs":[{"name":"query_room_alias","files":["v1.rs"]},{"name":"query_user_id","files":["v1.rs"]}],"files":["query_room_alias.rs","query_user_id.rs"]},{"name":"thirdparty","dirs":[{"name":"get_location_for_protocol","files":["v1.rs"]},{"name":"get_location_for_room_alias","files":["v1.rs"]},{"name":"get_protocol","files":["v1.rs"]},{"name":"get_user_for_protocol","files":["v1.rs"]},{"name":"get_user_for_user_id","files":["v1.rs"]}],"files":["get_location_for_protocol.rs","get_location_for_room_alias.rs","get_protocol.rs","get_user_for_protocol.rs","get_user_for_user_id.rs"]}],"files":["event.rs","lib.rs","query.rs","thirdparty.rs"]};
sourcesIndex["ruma_client"] = {"name":"","files":["error.rs","lib.rs","session.rs"]};
sourcesIndex["ruma_client_api"] = {"name":"","dirs":[{"name":"error","files":["kind_serde.rs"]},{"name":"r0","dirs":[{"name":"account","files":["add_3pid.rs","bind_3pid.rs","change_password.rs","deactivate.rs","delete_3pid.rs","get_username_availability.rs","register.rs","request_3pid_management_token_via_email.rs","request_3pid_management_token_via_msisdn.rs","request_openid_token.rs","request_password_change_token_via_email.rs","request_password_change_token_via_msisdn.rs","request_registration_token_via_email.rs","request_registration_token_via_msisdn.rs","unbind_3pid.rs","whoami.rs"]},{"name":"alias","files":["create_alias.rs","delete_alias.rs","get_alias.rs"]},{"name":"appservice","files":["set_room_visibility.rs"]},{"name":"backup","files":["add_backup_key_session.rs","add_backup_key_sessions.rs","add_backup_keys.rs","create_backup.rs","delete_backup.rs","delete_backup_key_session.rs","delete_backup_key_sessions.rs","delete_backup_keys.rs","get_backup.rs","get_backup_key_session.rs","get_backup_key_sessions.rs","get_backup_keys.rs","get_latest_backup.rs","update_backup.rs"]},{"name":"capabilities","files":["get_capabilities.rs","iter.rs"]},{"name":"config","files":["get_global_account_data.rs","get_room_account_data.rs","set_global_account_data.rs","set_room_account_data.rs"]},{"name":"contact","files":["get_contacts.rs","request_contact_verification_token.rs"]},{"name":"context","files":["get_context.rs"]},{"name":"device","files":["delete_device.rs","delete_devices.rs","get_device.rs","get_devices.rs","update_device.rs"]},{"name":"directory","files":["get_public_rooms.rs","get_public_rooms_filtered.rs","get_room_visibility.rs","set_room_visibility.rs"]},{"name":"filter","files":["create_filter.rs","get_filter.rs","lazy_load.rs","url.rs"]},{"name":"keys","files":["claim_keys.rs","get_key_changes.rs","get_keys.rs","upload_keys.rs","upload_signatures.rs","upload_signing_keys.rs"]},{"name":"media","files":["create_content.rs","get_content.rs","get_content_as_filename.rs","get_content_thumbnail.rs","get_media_config.rs","get_media_preview.rs"]},{"name":"membership","files":["ban_user.rs","forget_room.rs","get_member_events.rs","invite_user.rs","join_room_by_id.rs","join_room_by_id_or_alias.rs","joined_members.rs","joined_rooms.rs","kick_user.rs","leave_room.rs","unban_user.rs"]},{"name":"message","files":["get_message_events.rs","send_message_event.rs"]},{"name":"presence","files":["get_presence.rs","set_presence.rs"]},{"name":"profile","files":["get_avatar_url.rs","get_display_name.rs","get_profile.rs","set_avatar_url.rs","set_display_name.rs"]},{"name":"push","files":["delete_pushrule.rs","get_notifications.rs","get_pushers.rs","get_pushrule.rs","get_pushrule_actions.rs","get_pushrule_enabled.rs","get_pushrules_all.rs","get_pushrules_global_scope.rs","set_pusher.rs","set_pushrule.rs","set_pushrule_actions.rs","set_pushrule_enabled.rs"]},{"name":"read_marker","files":["set_read_marker.rs"]},{"name":"receipt","files":["create_receipt.rs"]},{"name":"redact","files":["redact_event.rs"]},{"name":"room","files":["create_room.rs","get_room_event.rs","report_content.rs","upgrade_room.rs"]},{"name":"search","files":["search_events.rs"]},{"name":"server","files":["get_user_info.rs"]},{"name":"session","dirs":[{"name":"get_login_types","files":["login_type_serde.rs"]},{"name":"login","files":["user_serde.rs"]}],"files":["get_login_types.rs","login.rs","logout.rs","logout_all.rs","sso_login.rs","sso_login_with_provider.rs"]},{"name":"state","files":["get_state_events.rs","get_state_events_for_key.rs","send_state_event.rs"]},{"name":"sync","files":["sync_events.rs"]},{"name":"tag","files":["create_tag.rs","delete_tag.rs","get_tags.rs"]},{"name":"thirdparty","files":["get_location_for_protocol.rs","get_location_for_room_alias.rs","get_protocol.rs","get_protocols.rs","get_user_for_protocol.rs","get_user_for_user_id.rs"]},{"name":"to_device","files":["send_event_to_device.rs"]},{"name":"typing","files":["create_typing_event.rs"]},{"name":"user_directory","files":["search_users.rs"]},{"name":"voip","files":["get_turn_server_info.rs"]}],"files":["account.rs","alias.rs","appservice.rs","backup.rs","capabilities.rs","config.rs","contact.rs","context.rs","device.rs","directory.rs","filter.rs","keys.rs","media.rs","membership.rs","message.rs","presence.rs","profile.rs","push.rs","read_marker.rs","receipt.rs","redact.rs","room.rs","search.rs","server.rs","session.rs","state.rs","sync.rs","tag.rs","thirdparty.rs","to_device.rs","typing.rs","uiaa.rs","user_directory.rs","voip.rs"]},{"name":"unversioned","files":["discover_homeserver.rs","get_supported_versions.rs"]}],"files":["error.rs","lib.rs","r0.rs","unversioned.rs"]};
sourcesIndex["ruma_common"] = {"name":"","dirs":[{"name":"push","dirs":[{"name":"condition","files":["room_member_count_is.rs"]}],"files":["action.rs","condition.rs","iter.rs","predefined.rs"]}],"files":["authentication.rs","directory.rs","encryption.rs","lib.rs","power_levels.rs","presence.rs","push.rs","thirdparty.rs"]};
sourcesIndex["ruma_events"] = {"name":"","dirs":[{"name":"call","files":["answer.rs","candidates.rs","hangup.rs","invite.rs"]},{"name":"key","dirs":[{"name":"verification","files":["accept.rs","cancel.rs","done.rs","key.rs","mac.rs","ready.rs","request.rs","start.rs"]}],"files":["verification.rs"]},{"name":"policy","dirs":[{"name":"rule","files":["room.rs","server.rs","user.rs"]}],"files":["rule.rs"]},{"name":"room","dirs":[{"name":"message","files":["content_serde.rs","feedback.rs"]}],"files":["aliases.rs","avatar.rs","canonical_alias.rs","create.rs","encrypted.rs","encryption.rs","guest_access.rs","history_visibility.rs","join_rules.rs","member.rs","message.rs","name.rs","pinned_events.rs","power_levels.rs","redaction.rs","relationships.rs","server_acl.rs","third_party_invite.rs","tombstone.rs","topic.rs"]}],"files":["call.rs","custom.rs","direct.rs","dummy.rs","enums.rs","error.rs","event_kinds.rs","event_type.rs","forwarded_room_key.rs","fully_read.rs","ignored_user_list.rs","key.rs","lib.rs","pdu.rs","policy.rs","presence.rs","push_rules.rs","reaction.rs","receipt.rs","relation.rs","room.rs","room_key.rs","room_key_request.rs","sticker.rs","tag.rs","typing.rs"]};
sourcesIndex["ruma_events_macros"] = {"name":"","files":["event.rs","event_content.rs","event_enum.rs","event_parse.rs","lib.rs"]};
sourcesIndex["ruma_federation_api"] = {"name":"","dirs":[{"name":"authorization","dirs":[{"name":"get_event_authorization","files":["v1.rs"]}],"files":["get_event_authorization.rs"]},{"name":"backfill","dirs":[{"name":"get_backfill","files":["v1.rs"]}],"files":["get_backfill.rs"]},{"name":"device","dirs":[{"name":"get_devices","files":["v1.rs"]}],"files":["get_devices.rs"]},{"name":"directory","dirs":[{"name":"get_public_rooms","files":["v1.rs"]},{"name":"get_public_rooms_filtered","files":["v1.rs"]}],"files":["get_public_rooms.rs","get_public_rooms_filtered.rs"]},{"name":"discovery","dirs":[{"name":"get_remote_server_keys","files":["v2.rs"]},{"name":"get_remote_server_keys_batch","files":["v2.rs"]},{"name":"get_server_keys","files":["v2.rs"]},{"name":"get_server_version","files":["v1.rs"]}],"files":["discover_homeserver.rs","get_remote_server_keys.rs","get_remote_server_keys_batch.rs","get_server_keys.rs","get_server_version.rs"]},{"name":"event","dirs":[{"name":"get_event","files":["v1.rs"]},{"name":"get_missing_events","files":["v1.rs"]},{"name":"get_room_state","files":["v1.rs"]},{"name":"get_room_state_ids","files":["v1.rs"]}],"files":["get_event.rs","get_missing_events.rs","get_room_state.rs","get_room_state_ids.rs"]},{"name":"keys","dirs":[{"name":"claim_keys","files":["v1.rs"]},{"name":"get_keys","files":["v1.rs"]}],"files":["claim_keys.rs","get_keys.rs"]},{"name":"membership","dirs":[{"name":"create_invite","files":["v1.rs","v2.rs"]},{"name":"create_join_event","files":["v1.rs","v2.rs"]},{"name":"create_join_event_template","files":["v1.rs"]},{"name":"create_leave_event","files":["v1.rs","v2.rs"]},{"name":"get_leave_event","files":["v1.rs"]}],"files":["create_invite.rs","create_join_event.rs","create_join_event_template.rs","create_leave_event.rs","get_leave_event.rs"]},{"name":"openid","dirs":[{"name":"get_openid_userinfo","files":["v1.rs"]}],"files":["get_openid_userinfo.rs"]},{"name":"query","dirs":[{"name":"get_custom_information","files":["v1.rs"]},{"name":"get_profile_information","files":["v1.rs"]},{"name":"get_room_information","files":["v1.rs"]}],"files":["get_custom_information.rs","get_profile_information.rs","get_room_information.rs"]},{"name":"serde","files":["pdu_process_response.rs","v1_pdu.rs"]},{"name":"thirdparty","dirs":[{"name":"bind_callback","files":["v1.rs"]},{"name":"exchange_invite","files":["v1.rs"]}],"files":["bind_callback.rs","exchange_invite.rs"]},{"name":"transactions","dirs":[{"name":"send_transaction_message","files":["v1.rs"]}],"files":["edu.rs","send_transaction_message.rs"]}],"files":["authorization.rs","backfill.rs","device.rs","directory.rs","discovery.rs","event.rs","keys.rs","lib.rs","membership.rs","openid.rs","query.rs","serde.rs","thirdparty.rs","transactions.rs"]};
sourcesIndex["ruma_identifiers"] = {"name":"","files":["crypto_algorithms.rs","device_key_id.rs","event_id.rs","key_id.rs","lib.rs","macros.rs","mxc_uri.rs","opaque_ids.rs","room_alias_id.rs","room_id.rs","room_id_or_room_alias_id.rs","room_version_id.rs","server_name.rs","signatures.rs","user_id.rs"]};
sourcesIndex["ruma_identifiers_macros"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ruma_identifiers_validation"] = {"name":"","files":["device_key_id.rs","error.rs","event_id.rs","key_id.rs","lib.rs","mxc_uri.rs","room_alias_id.rs","room_id.rs","room_id_or_alias_id.rs","room_version_id.rs","server_name.rs","user_id.rs"]};
sourcesIndex["ruma_identity_service_api"] = {"name":"","dirs":[{"name":"authentication","dirs":[{"name":"get_account_information","files":["v2.rs"]},{"name":"logout","files":["v2.rs"]},{"name":"register","files":["v2.rs"]}],"files":["get_account_information.rs","logout.rs","register.rs"]},{"name":"keys","dirs":[{"name":"check_public_key_validity","files":["v2.rs"]},{"name":"get_public_key","files":["v2.rs"]},{"name":"validate_ephemeral_key","files":["v2.rs"]}],"files":["check_public_key_validity.rs","get_public_key.rs","validate_ephemeral_key.rs"]},{"name":"lookup","dirs":[{"name":"get_hash_parameters","files":["v2.rs"]},{"name":"lookup_3pid","files":["v2.rs"]}],"files":["get_hash_parameters.rs","lookup_3pid.rs"]},{"name":"status","files":["v2.rs"]},{"name":"tos","dirs":[{"name":"accept_terms_of_service","files":["v2.rs"]},{"name":"get_terms_of_service","files":["v2.rs"]}],"files":["accept_terms_of_service.rs","get_terms_of_service.rs"]}],"files":["authentication.rs","keys.rs","lib.rs","lookup.rs","status.rs","tos.rs"]};
sourcesIndex["ruma_push_gateway_api"] = {"name":"","dirs":[{"name":"send_event_notification","files":["v1.rs"]}],"files":["lib.rs","send_event_notification.rs"]};
sourcesIndex["ruma_serde"] = {"name":"","dirs":[{"name":"canonical_json","files":["value.rs"]},{"name":"duration","files":["opt_ms.rs","secs.rs"]},{"name":"time","files":["ms_since_unix_epoch.rs","opt_ms_since_unix_epoch.rs","opt_s_since_unix_epoch.rs","s_since_unix_epoch.rs"]},{"name":"urlencoded","dirs":[{"name":"de","files":["val_or_vec.rs"]},{"name":"ser","files":["key.rs","pair.rs","part.rs","value.rs"]}],"files":["de.rs","ser.rs"]}],"files":["can_be_empty.rs","canonical_json.rs","cow.rs","duration.rs","empty.rs","json_string.rs","lib.rs","raw.rs","single_element_seq.rs","strings.rs","test.rs","time.rs","urlencoded.rs"]};
sourcesIndex["ruma_serde_macros"] = {"name":"","files":["attr.rs","case.rs","deserialize_from_cow_str.rs","display_as_ref_str.rs","enum_as_ref_str.rs","enum_from_string.rs","lib.rs","outgoing.rs","serialize_as_ref_str.rs","util.rs"]};
sourcesIndex["ruma_signatures"] = {"name":"","files":["functions.rs","keys.rs","lib.rs","signatures.rs","verification.rs"]};
createSourceSidebar();
